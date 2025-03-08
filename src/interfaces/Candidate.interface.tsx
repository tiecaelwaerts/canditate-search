// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    avatar_url: string;
    login: string;
    name: string;
    location: string;
    email: string;
    company: string;
    html_url: string;
  }

export default Candidate;