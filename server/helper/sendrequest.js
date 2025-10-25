const axios = require('axios');

const sendUserRequest = async (message) => {
  try {
    const res = await axios.post("", {
      message: message
    });
    console.log(`This is the response for user request`, res.data);
    return res;
  } catch (error) {
    console.log("Error sending the data", error.message);
    throw error;
  }
};

module.exports = sendUserRequest;
