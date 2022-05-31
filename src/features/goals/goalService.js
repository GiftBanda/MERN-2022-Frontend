import axios from "axios";

const API_URL = "http://localhost:5001/api/goals";

// Create new goal

const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(API_URL, goalData, config);
  return res.data;
}

const goalService = {
    createGoal
}

export default goalService;