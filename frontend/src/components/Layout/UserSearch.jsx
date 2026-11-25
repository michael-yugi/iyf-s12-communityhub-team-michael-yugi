import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import LoadingSpinner from './shared/LoadingSpinner';
import ErrorMessage from './shared/ErrorMessage';

export default function UserSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    // Debounce effect: wait 400ms after typing stops
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 400);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Fetch users using our custom hook
    const { data: users, loading, error, refetch } = useFetch(
        'https://jsonplaceholder.typicode.com/users'
    );

    // Filter users based on debounced search term (matching name or email)
    const filteredUsers = users?.filter(user => 
        user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        user.email.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">User Directory Search</h2>
            
            <div className="mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name or email..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
            </div>

            {loading && <LoadingSpinner text="Searching users..." />}
            {error && <ErrorMessage message={error} onRetry={refetch} />}

            {!loading && !error && (
                <ul className="divide-y divide-gray-200">
                    {filteredUsers && filteredUsers.length > 0 ? (
                        filteredUsers.map(user => (
                            <li key={user.id} className="py-3 flex flex-col">
                                <span className="font-semibold text-gray-900">{user.name}</span>
                                <span className="text-sm text-gray-500">{user.email}</span>
                                <span className="text-xs text-indigo-600">{user.company.name}</span>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center py-4">No matching users found.</p>
                    )}
                </ul>
            )}
        </div>
    );
}