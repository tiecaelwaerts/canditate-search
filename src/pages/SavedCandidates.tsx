import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]') || [];
    setSavedCandidates(candidates);
  }, []);

  if (savedCandidates.length === 0) {
    return <h1>No candidates have been accepted</h1>;
  }

  return (
    <div>
      <h1>Potential Candidates</h1>
      <ul>
        {savedCandidates.map((candidate, index) => (
          <li key={index}>
            <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} />
            <p>Name: {candidate.name}</p>
            <p>Username: {candidate.login}</p>
            <p>Location: {candidate.location}</p>
            <p>Email: {candidate.email}</p>
            <p>Company: {candidate.company}</p>
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedCandidates;
