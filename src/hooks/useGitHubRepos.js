import { useState, useEffect } from 'react';

const CACHE_KEY = 'gh_repos_cj_v1';
const CACHE_TTL = 3600000;

const FEATURED = [
  'Public-Meter', 'CamPal', 'KayakBovilla', 'investment_watch',
  'Ecommerce-Store', 'DropBox_Clone', 'Java-Gym-Management-System', 'Blog'
];

export const useGitHubRepos = () => {
  const [state, setState] = useState({ repos: [], loading: true, error: null });

  useEffect(() => {
    const load = async () => {
      try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
        if (cached && Date.now() - cached.ts < CACHE_TTL) {
          setState({ repos: cached.repos, loading: false, error: null });
          return;
        }
        const res = await fetch(
          'https://api.github.com/users/cetijunior/repos?sort=updated&per_page=100'
        );
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const all = await res.json();
        const repos = FEATURED.map(name => all.find(r => r.name === name)).filter(Boolean);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ repos, ts: Date.now() }));
        setState({ repos, loading: false, error: null });
      } catch (err) {
        setState({ repos: [], loading: false, error: err.message });
      }
    };
    load();
  }, []);

  return state;
};
