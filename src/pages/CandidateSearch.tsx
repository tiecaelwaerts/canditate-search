import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    fetchCandidate();
  }, []);

  const fetchCandidate = async () => {
    const candidates = await searchGithub();
    if (candidates.length > 0) {
      setCandidate(candidates[0]);
    } else {
      setCandidate(null);
    }
  };

  const saveCandidate = () => {
    if (candidate) {
      const updatedSavedCandidates = [...savedCandidates, candidate];
      setSavedCandidates(updatedSavedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates));
      fetchCandidate();
    }
  };

  const skipCandidate = () => {
    fetchCandidate();
  };

  if (!candidate) {
    return <h1>No more candidates available</h1>;
  }

  return (
    <div>
      <h1>Candidate Search</h1>
      <div>
        <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} />
        <p>Name: {candidate.name}</p>
        <p>Username: {candidate.login}</p>
        <p>Location: {candidate.location}</p>
        <p>Email: {candidate.email}</p>
        <p>Company: {candidate.company}</p>
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      </div>
      <button onClick={saveCandidate}>+</button>
      <button onClick={skipCandidate}>-</button>
    </div>
  );
};

export default CandidateSearch;
