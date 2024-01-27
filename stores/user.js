import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"

export const useUserStore = defineStore("user", () => {
  const currentUser = {
    id: 1,
    heroesId: [215],
    username: 'Tiffany Chin',
    publishUsername: true,
    email: 'name@gmail.com',
    countryOfResidence: 'Poland',
    publishcountryOfResidence: true,
    instagram: 'Insta',
    publishInstagram: true,
    mentionInstagram: true,
    language: 'ENG',
    reason: 'To support political prisoners that have been imprisoned for standing up for their rights. My family is from Hong Kong, which is currently going through a similar situation like Belarus. I am also an embroiderer myself, and by supporting this project, I feel that I\'m supporting political prisoners all over the world. Speaking of political prisoners, I already have one in mind. I would like to focus on, and it is Maria Kalesnikava,',
    publishReason: true,
    cards: [
      {
        type: 'inProgress', 
        link: "/Embroidery/Step-2-preparation",
        imageUrl: "https://spring96.org/files/images/kalesnikava.jpg",
        stepIndex: 2,
        tooltip: "",
      },
      {
        type: 'sent', 
        link: "",
        imageUrl: "https://spring96.org/files/images/kalesnikava.jpg",
        tooltip: "",
        warning: true
      },
      {
        type: 'requested', 
        link: "",
        imageUrl: "",
        tooltip: "Sorry,  it's not possible to start a new embroidery until the current work-in-progress reaches the step 6 - shipping.",
      },
      {
        type: 'patternIsReady', 
        link: "/Embroidery/Step-2-preparation",
        imageUrl: "https://spring96.org/files/images/kalesnikava.jpg",
        tooltip: ""
      },
    ]
  }

  currentUser.reasonTruncated = currentUser.reason.slice(0, 220) + '...'

  const isLogged = ref(false)

  const token = ref("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJlY0pMZ1JBclQ4QVllTGcwIiwiZW1haWwiOiJkYXZpZC5saXBrb3ZpY0BnbWFpbC5jb20iLCJyb2xlIjoicmVhZGVyIiwiaWF0IjoxNzA1ODU3OTAyfQ.3NQ1vlIw_J7yeid6ZPewWlSDFMLqsj4Ur-77pxXPP_o")
  const userId = ref("recJLgRArT8AYeLg0")
  const email = ref("david.lipkovic@gmail.com")

  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'
  
  const login = async (email) => {
    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/email/login', {
        method: 'post',
        body: { 
          email
          // "email": "pavel.liber@gmail.com"
        }
      })
      console.log(responseData.value)
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  const validatePin = async (email, pin) => {
    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/email/validate', {
        method: 'post',
        body: { 
          email, 
          pin
        }
      })

      console.log(responseData.value.result)

      token.value = responseData.value.result.token
      userId.value = responseData.value.result.userId
      email.value = responseData.value.result.email
    } catch (error) {
      console.error('Error validating pin:', error)
    }
  }
  
  const getUserActivities = async () => {
    try {
      const headers = {}

      if (token.value) {
        headers['Authorization'] = 'Bearer ' + token.value
      }

      const { data: responseData } = await useFetch(endpointUrl + 'api/prisoners/user/' + userId.value, {
        headers,
      });

      // const {data: responseData} = await useFetch(endpointUrl + 'api/prisoners/user/' + userId.value, {
      //   onRequest({ request, options }) {
      //     options.headers.authorization = token.value
      //   }
      // })
      console.log(responseData)
      console.log(responseData.value.result)

    } catch (error) {
      console.error('Error fetching user activities data:', error)
    }
  }

  // app.post("/login", (req, res) => {
  //   const USERNAME = "uma victor";
  //   const PASSWORD = "8888";
  //   const { username, password } = req.body;
  //   if (username === USERNAME && password === PASSWORD) {
  //     const user = {
  //       id: 1,
  //       name: "uma victor",
  //       username: "uma victor",
  //     };
  //     const token = jwt.sign(user, process.env.JWT_KEY);
  //     res.json({
  //       token,
  //       user,
  //     });
  //   } else {
  //     res.status(403);
  //     res.json({
  //       message: "wrong login information",
  //     });
  //   }

  return {
    currentUser,
    isLogged,
    login,
    getUserActivities,
    validatePin
  }
})
