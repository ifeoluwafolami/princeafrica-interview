import { useState } from 'react';
import { mockApi } from '../mockApi';
import type { Task } from '../types';

export const useSearch = () => {
    const [searchResults, setSearchResults] = useState<Task[]>([]);
    const [searching, setSearching] = useState(false);

    const search = async (query: string) => {
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        setSearching(true);

        const results = await mockApi.searchTasks(query);
        setSearchResults(results);
        setSearching(false);
    };

    return { searchResults, searching, search };
};
