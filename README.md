# MERN AI Image Generation ` DALL-E 2.0`.
![AI Image Generation](README.d/openai.png)
This application is an AI image generation for DALL-E where prompts are used to generate images from text using OpenAI
## Client
- The client creates images uses different prompts and an image is generated.
- The client uses tailwind, react and react-router-dom.
- There are two page for landing and creation.

## Server
- Cloudinary used to storage images for the project in the backend.
- Connection to mongoDB with mongoose in a `connect.js file`.
- Mongo Atlas to create a database for DALL-E.

## Service providers
- ### OpenAI for API keys
  - **URL**
    ```
     https://platform.openai.com
    ```
  - **ID(Login with Google)**
    ```
    zipshowkorea3@gmail.com
    ```
  - **Access Key List**\
    ![img_1.png](README.d/service-provider/img_1.png)\
    ![img.png](README.d/service-provider/img.png)
    
- ### Cloudinary for image storage: Provide a PhotoUrl as post
  - **URL**
    ```
    https://cloudinary.com
    ```
  - **ID(Login with Google)**
    ```
    zipshowkorea3@gmail.com
    ```
  - **Configuration**
    - Cloud Name\
      ![img_2.png](README.d/service-provider/img_2.png)\
      *Left bottom corner*
    - API Key & Secret\
      ![img_3.png](README.d/service-provider/img_3.png)\
      ![img_4.png](README.d/service-provider/img_4.png)
- ### MongoDB for the database
  - **URL**
    ```
    https://account.mongodb.com/account/login
    ```
  - **ID(Login with Google)**
    ```
    zipshowkorea1@gmail.com
    ```
  - **Connection**\
    ![img_5.png](README.d/service-provider/img_5.png)\
    ![img_6.png](README.d/service-provider/img_6.png)
- ### Render to host our Backend server
  - **URL**
    ```
    https://render.com/
    ```
  - **ID(Login with GitHub)**
    ```
    zipshowkorea
    ```
  - **Dashboard(Servers)**\
    ![img_7.png](README.d/service-provider/img_7.png)
  - **Configuration**\
    ![img_8.png](README.d/service-provider/img_8.png)\
    ![img_9.png](README.d/service-provider/img_9.png)\
    ![img_10.png](README.d/service-provider/img_10.png)\
    *Environment Variables are in the `.env` file*
    ```
    # Environment Variables(.env)
    
    CLOUDINARY_API_KEY=""
    CLOUDINARY_API_SECRET=""
    CLOUDINARY_CLOUD_NAME=""
    MONGODB_URL=""
    OPENAI_API_KEY=""
    ```