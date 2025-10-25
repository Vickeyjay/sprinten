const sendRequest = require("../helper/sendrequest");

const handleChat = async (req, res) => {
  try {
    const {userRequest} = req.body;
    userResponse = await sendRequest(userRequest);
    console.log("Response for the user", userResponse);

    if (userResponse && userResponse.status === 200) {
        res.status(200).json({
            success : true,
            message : "Response",
            data : userResponse.data
        })
    } else{
        res.status(400).json({
            success : false,
            message : "There is an error generating your request"
        })
    }
  } catch (error) {
    res.status(500).json({
        success : false,
        message : "There is an error with the server",
        error : error.message
    })
  }
};

module.exports = handleChat