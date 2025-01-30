import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Team = () => {
    const [teams, setTeams] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [editingTeamId, setEditingTeamId] = useState(null);
    const [userIdToAdd, setUserIdToAdd] = useState(''); // For adding members
    const [userIdToRemove, setUserIdToRemove] = useState(''); // For removing members

    // Fetch all teams
    const fetchTeams = async () => {
        try {
            const response = await axios.get('http://localhost:5000/teams/');
            setTeams(response.data);
        } catch (error) {
            console.error('Error fetching teams', error);
            alert('Failed to fetch teams');
        }
    };

    useEffect(() => {
        fetchTeams();
    }, []);

    // Create or update team
    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = { name, description };

        try {
            if (editingTeamId) {
                await axios.put(`http://localhost:5000/teams/${editingTeamId}`, postData);
                alert('Team updated successfully');
            } else {
                await axios.post('http://localhost:5000/teams/', postData);
                alert('Team created successfully');
            }
            resetForm();
            fetchTeams(); // Refresh the team list after creating/updating
        } catch (error) {
            console.error('Error creating/updating team', error);
            alert('Failed to create/update team');
        }
    };

    // Reset form fields
    const resetForm = () => {
        setName('');
        setDescription('');
        setEditingTeamId(null);
        setUserIdToAdd('');
        setUserIdToRemove('');
    };

    // Edit team
    const editTeam = (team) => {
        setName(team.name);
        setDescription(team.description);
        setEditingTeamId(team.team_id);
    };

    // Delete team
    const deleteTeam = async (teamId) => {
        try {
            await axios.delete(`http://localhost:5000/teams/${teamId}`);
            alert('Team deleted successfully');
            fetchTeams(); // Refresh the team list after deleting
        } catch (error) {
            console.error('Error deleting team', error);
            alert('Failed to delete team');
        }
    };

     // Add member to team
     const addMemberToTeam = async (teamId) => {
         try {
             await axios.post(`http://localhost:5000/teams/${teamId}/add-member`, 
             { user_id: userIdToAdd }); // Ensure user ID is included here
             alert('Member added successfully');
             fetchTeams(); // Refresh the team list after adding a member
         } catch (error) {
             console.error('Error adding member', error);
             alert('Failed to add member');
         }
     };

     // Remove member from team
     const removeMemberFromTeam = async (teamId) => {
         try {
             await axios.post(`http://localhost:5000/teams/${teamId}/remove-member`, 
             { user_id: userIdToRemove }); // Ensure user ID is included here
             alert('Member removed successfully');
             fetchTeams(); // Refresh the team list after removing a member
         } catch (error) {
             console.error('Error removing member', error);
             alert('Failed to remove member');
         }
     };

     return (
         <div className="">
             <h1 className="text-3xl font-bold mb-6 text-white text-center">Manage Your Teams</h1>

             {/* Team Form */}
             <form onSubmit={handleSubmit} className="mb-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                 <h2 className="text-xl font-semibold mb-4">{editingTeamId ? 'Edit Team' : 'Create Team'}</h2>
                 <input 
                     type="text" 
                     placeholder="Team Name" 
                     value={name} 
                     onChange={(e) => setName(e.target.value)} 
                     className="border p-3 rounded w-full mb-4"
                     required
                 />
                 <textarea 
                     placeholder="Description" 
                     value={description} 
                     onChange={(e) => setDescription(e.target.value)} 
                     className="border p-3 rounded w-full mb-4"
                     required
                 />
                 <button type="submit" className="bg-blue-600 text-white p-3 rounded w-full">
                     {editingTeamId ? 'Update Team' : 'Create Team'}
                 </button>
             </form>

             {/* Teams List */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                 {teams.map(team => (
                     <div key={team.team_id} className="bg-white p-4 rounded-lg shadow-md">
                         <h3 className="text-xl font-bold">{team.name}</h3>
                         <p className="text-gray-600">{team.description}</p>
                         <div className="flex justify-between mt-4">
                             <button onClick={() => editTeam(team)} className="text-yellow-500 hover:text-yellow-700">
                                 <FaEdit /> Edit
                             </button>
                             <button onClick={() => deleteTeam(team.team_id)} className="text-red-500 hover:text-red-700">
                                 <FaTrash /> Delete
                             </button>
                         </div>

                         {/* Add Member Section */}
                         <div className="mt-4">
                             <input 
                                 type="text" 
                                 placeholder="User ID to add" 
                                 value={userIdToAdd} 
                                 onChange={(e) => setUserIdToAdd(e.target.value)} 
                                 className="border p-2 rounded w-full mb-2"
                             />
                             <button onClick={() => addMemberToTeam(team.team_id)} className="bg-green-600 text-white p-2 rounded w-full">
                                 Add Member
                             </button>
                             <input 
                                 type="text" 
                                 placeholder="User ID to remove" 
                                 value={userIdToRemove} 
                                 onChange={(e) => setUserIdToRemove(e.target.value)} 
                                 className="border p-2 rounded w-full mb-2 mt-2"
                             />
                             <button onClick={() => removeMemberFromTeam(team.team_id)} className="bg-red-600 text-white p-2 rounded w-full">
                                 Remove Member
                             </button>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
     );
};

export default Team;
