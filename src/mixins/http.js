import axios from 'axios';

export default {
  request: async (url, action, params = {}) => {
    try {
      return await axios[action](url, { params });
    } catch (error) {
      throw new Error(error);
    }
  }
};