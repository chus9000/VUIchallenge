// Challenges data - only loaded after authentication
const CHALLENGES_VERSION = '1.3'; // Increment this when you update challenges
const CHALLENGES_DATA = [
  {
      "title": "Welcome message",
      "description": "Design a Welcome message for a service called StreamFinder for a Google Action or an Alexa Skill. The service helps users discover what to watch across multiple streaming platforms (Netflix, Prime, Disney+, etc.) and allows customers to ask for personalized recommendations.",
      "tip": "The welcome message is the first prompt your customers will receive from your interaction. It is the entrance door for your experience and will need to help customers understand what your experience is all about while keeping them motivated to carry on. Most welcome messages have 3 parts: Greetings, Scope explanation, Call to action."
    },
    {
      "title": "Where to go",
      "description": "Design a prompt asking users to tell which city in the US they want to visit. What possible answers can you get for that prompt? Design also all the prompts that you will give back depending on the possible answers you can get.",
      "tip": "Just some ideas today. Depending on your wording, your customers might get it right and say a city in the US, or get it totally wrong and ask for countries in Europe. Be super careful with your words! Even if your wording is perfect, you will need to be ready for different scenarios. Here you have some ideas: The city name is shared, The city is not in the US, Any other scenario you can think of."
    },
    {
      "title": "Lists",
      "description": "Design a list for your service. Your VUI interface gives movie recommendations from a catalogue of hundreds of titles. Each title is associated with rich information like actors, year, rating, etc. You can decide how many titles you want to list in a row, and what information you are going to include for each title.",
      "tip": "When listing items, you need to be super cautious with cognitive overload. Cognitive load can vary from one user to another and it will depend on many different aspects. Here you have some ideas you can consider: a) Amount of information shared for each title, b) Familiarity with the results, c) Customer goal: do customers want to get many results or just a single recommendation?"
    },
    {
      "title": "Utterance collection",
      "description": "Users can refer to the same service in many different ways. That's the magic of conversational interaction. Collect at least 10 utterances for users asking for a food recommendation.",
      "tip": "If you run out of ideas, I strongly recommend using some research. You can search for similar services online, blogs, etc., or even run a quick survey on LinkedIn or Twitter."
    },
    {
      "title": "Success confirmation",
      "description": "Create 3 different success confirmation prompts for users requesting to set a thermostat temperature. Test the different versions and decide which one you would use.",
      "tip": "Your users need to know that the request was fulfilled, but you can have different ways of achieving that. You can also use a multimodal approach here."
    },
    {
      "title": "Confirmations",
      "description": "Your VUI gives step-by-step guidance for cooking recipes. Design a solution for users that request a different recipe in-between steps.",
      "tip": "This is a confirmation situation. Stepping away from a recipe because of an error can be super frustrating for customers. How can you make sure that you are doing what customers expect? How can users recover from an unintended request?"
    },
    {
      "title": "Welcome back Message",
      "description": "Create a welcome back message for a returning user in a streaming content discovery experience. It needs to have a clear final call to action but also include a hint about a new feature (like 'trending this week' or 'similar to what you watched').",
      "tip": "Two interesting things in the challenge today: 1) Returning visitors - We can create different experiences for users that already know how our service works. Consider personalizing based on their watching history. 2) Hints - Hints are great and can help us teach our users about services we provide that are not part of the main experience. As always, use them wisely."
    },
    {
      "title": "Use cases with lists",
      "description": "Create a list of use cases where lists of items are crucial. Pay special attention to use cases where presenting more than 5 elements in a row might be mandatory.",
      "tip": "There's this general rule of thumb that says that lists should have from 3 to 5 items, but there are some use cases that will require special treatment."
    },
    {
      "title": "Multi-turn experiences",
      "description": "Create a multi-turn experience for a voice service that gives information about trips. For getting the right information you need to know origin, destination, date and time.",
      "tip": "With this exercise I want you to practice several things: Wording: Depending on the verbiage you use you will get different answers from your users. Make it easy for them to say what you need. Multi-turn and slot filling: Users hate when it takes too long to get what they want and they might want to skip steps. Can you help them do that with your prompts? Trips: It's a popular use case and you better have experience on it."
    },
    {
      "title": "Info details and SSML",
      "description": "Create an interaction where you inform customers about the address and telephone of a restaurant called Lion's House (you can change the name if you want). You can decide to use a single or multi turn experience. Pay special attention to SSML tags when needed.",
      "tip": "Are you familiar with the term cognitive load? Our brains are incredibly limited and there's always a limited amount of information we can handle. For this challenge, think about what your users want to achieve and share the information so it is easier for them to be successful."
    },
        {
      "title": "Training",
      "description": "Think about a HIIT training and design the explanation for the full 15 minutes training, and the specific prompt for the first exercise. Your users will start doing jumping jacks for 30 seconds.",
      "tip": "Two main things to consider here: Cognitive load (yep, again): You need to balance here the amount of information you share about the full training and the one about the specific exercise. It can get crazy for your users to understand a single thing! Training without visuals: Explaining how to do an exercise without any visual support is super tricky. I recommend you to test your prompt with a user to see if they are able to properly do the exercise."
    },
    {
      "title": "Hotel checkout",
      "description": "Design a checkout experience for a hotel. Decide if this is going to be a proactive experience from a voice service or if it will be triggered only after a specific customer request.",
      "tip": "This is a great example for context design. Do customers need the same level of detail every day? Do we need something different the checkout day? Also, this interaction will require offline actions (returning a key, leaving the room, paying the bill...). Are we going to keep track of those on the voice experience?"
    },
    {
      "title": "Geolocation",
      "description": "Brainstorm at least 5 use cases for voice where geo location can help the interaction",
      "tip": "There can be some cases where location is crucial for the service to work, but it might be just nice to have for others. This challenge is about inventing so get crazy and be creative!"
    },
    {
      "title": "Food trucks",
      "description": "Improve the following experience for a food track voice experience: 'I suggest you the Gran Kahuna hamburger. You can ask me for the price, ingredients, place an order or ask me for other recommendations. What do you want to do?'",
      "tip": "This looks like a web page right? Let's create something more conversational here and less web-menu based."
    },
    {
      "title": "Say my age",
      "description": "Design a say my age voice interaction. The service will ask users the birth date and it will give the age back. Take into account every probable error and deviation from the happy path.",
      "tip": "You need to get the information for 3 slots: day, month, and year. Your wording will help your users stay on track and share what you need, but you will need to be prepared for all the possible combinations."
    },
    {
      "title": "Watering plants",
      "description": "Design a voice experience for watering your plants. Your users should be able to log every time they water their plants, request when the plants were last watered, and also ask to get reminders for watering them.",
      "tip": "You can over complicate things a lot with this one. The tip is going to be easy now: Keep it simple!"
    },
    {
      "title": "Math Quiz",
      "description": "Design a math quiz voice experience. Will you add different levels? Any gamification strategy?",
      "tip": "The market places are full of Math quizzes. Think about ways to do yours more interesting!"
    },
    {
      "title": "Sound experience",
      "description": "A sound experience can be a super simple one: users request to play a sound and the sound starts playing. Define the details for your use case: how long will the sound last? Will you add anything when the sound is about to end? Any further feature you can add to your experience?",
      "tip": "Take into account what users will want to do with the sound. Is it for relax? Sleeping? Making fun? Depending on the exact use case and the scenario you will be able to add features to improve the experience."
    },
    {
      "title": "Farts",
      "description": "Not the nicest experience but fart actions and skills are super common in the VUI world. Users request them all the time. What features can you add to this super simple experience?",
      "tip": "Did you know that a farts app was the first one to make one million dollars in Android? Don't underestimate the use case and get creative on how you can add value here."
    },
    {
      "title": "Desserts and lists",
      "description": "Design three different alternatives to the following experience: 'I have chocolate cake, carrot cake, Wildberry flan, salad fruit, brownies, muffins, tiramisu, apples, bananas, and pineapple. Which one would you like for dessert?'",
      "tip": "Lists are super important in VUI design. Think about the use case and about the different users you can have and what they are willing to achieve. Remember, there's never a single solution but one that is better than the rest"
    },
        {
      "title": "Stories & SSML",
      "description": "Using TTS voice only, what SSML tags would you use for an interactive story? Create some examples on the [developer console](https://developer.amazon.com/alexa/console/ask) or with any [online SSML](https://www.getwoord.com/ssml-editor) editor.",
      "tip": "Warning! Some tags might not sound as you expect and your expectations might not be met. Test them carefully and make sure they make the effect you need for your story."
    },
    {
      "title": "Personalities",
      "description": "Create a sample dialogue for a movie recommender voice experience and adapt the wording for 3 different assistant personalities.",
      "tip": "Adapt your messages to the audiences you think you can have in your use case. If you want to dive deep in the topic, here you have an article I wrote about [personality design](https://uxdesign.cc/how-to-design-the-personality-of-your-voice-interface-c73641b6026d?gi=a1f7ac08871b)."
    },
    {
      "title": "Branding",
      "description": "Design the branding of an Action/Skill that gives you daily hints on housekeeping. Decide the name, the logo, and the welcome message.",
      "tip": "Just a few ideas: The name needs to be easy to say and remember, and easy for any ASR to capture it. The logo needs to stand out in the market place. The welcome message needs to clarify the scope of the interaction."
    },
    {
      "title": "Baby names",
      "description": "Design a baby name recommender voice experience. Users can get ideas for names based on the parameters that you define (e.g. starting letter, origin, etc.).",
      "tip": "ASR tends to mess it a little bit transcribing names. At the end you can never know if you should spell it as 'Marc' or 'Mark'. I would recommend you to avoid users saying the names directly since it can become a really disappointing experience."
    },
    {
      "title": "Not available here",
      "description": "Design a prompt for users that make a request that cannot be fulfilled on that specific device, but can be completed in others.",
      "tip": "You should create prompts for the different possible scenarios, taking into account if users have any other device where the request can be fulfilled. If they do, can we always assume that both devices are reachable?"
    },
    {
      "title": "Ordering pizza",
      "description": "Create a Happy path for a user ordering a pizza. Users can get recommendations and decide when they want the pizza to be delivered. Assume you already know the user address.",
      "tip": "With a pizza delivery service is always difficult to meet user expectations. Don't try to replicate the full experience of a mobile app or a web page, but make sure the experience still adds value for users, and it's somehow better than what they already have."
    },
    {
      "title": "Rock, paper, scissors",
      "description": "Create a Welcome message for a rock, paper, scissors game for users that might not know the rules",
      "tip": "This game is super easy once you know the rules, but you are going to have fun explaining it just via voice. You can decide to use a single or multi-turn experience."
    },
    {
      "title": "Find my phone",
      "description": "Design a service called Find my Phone. Users can give their phone number and then request the service to call them. Decide if you are going to handle different numbers.",
      "tip": "Users want a super quick experience when they are desperate looking for their phone. Try to make it super easy for them and work on strategies to add some other features without over complicating the main feature."
    },
    {
      "title": "Phone numbers",
      "description": "You designed a Find my Phone Skill yesterday. Work now an all the possible scenarios users might face when giving their phone number with all the errors and problems they can have. Design all the prompts to solve the possible situations.",
      "tip": "This challenge is for you to dive deep in a super specific problem. Try to cover everything that can go wrong in a situation like this."
    },
    {
      "title": "Hints",
      "description": "You are working on a streaming content discovery voice interaction. Design a Hint system to educate customers about features beyond basic search (like genre filtering, mood-based recommendations, or watch party scheduling). Where do you want to place the Hints? How often would you trigger those hints?",
      "tip": "Think about features that can be useful for this specific use case and add them as part of the hint. Never mess with the customer request. Respect your users, give them what they need and be super respectful with them for anything that you want to offer."
    },
        {
      "title": "Thermostats",
      "description": "Focus on finding all the possible use cases you should consider when working with thermostats. Make a list of anything related to it (some research on mobile apps can be really helpful), and then review each one and decide whether it is a good candidate to be managed in a voice interaction.",
      "tip": "You can share your solution on Twitter and LinkedIn with the hashtag #VUIchallenge, and get feedback from the community."
    },
    {
      "title": "Multi-thermostat",
      "description": "Imagine you have one thermostat on each room of your house. Design how you are going to answer to the utterance 'What's the temperature?'",
      "tip": "Pay attention to the context of the request and what users might want to do with that information. Should the answer change depending on things like: Time of the day - Do customers need the same information if they are going to sleep or if they are going to be moving around the house? Heating/cooling devices are working."
    },
    {
      "title": "Lights disambiguation",
      "description": "Design 3 interaction alternatives for a customer requesting to turn on a light when there are several availables",
      "tip": "Users expect this to be a super simple interaction where they make the request and the magic happens. Think about ways to avoid multi turn disambiguations."
    },
    {
      "title": "Alarms",
      "description": "Design the interaction for the utterance 'Set an alarm at 9'. Take into account the current time and any possible scenario that can change what customers are willing to achieve.",
      "tip": "Users need to make this right but also want to do it faster than they do with their mobile phone. Is there any assumption we can make to do things faster? Is it worth it?"
    },
    {
      "title": "Weather",
      "description": "Design the experiences for the following requests: What's the weather going to be today? What's the weather going to be tomorrow? What's the weather going to be next week?",
      "tip": "As always, think about what information your users might be looking for with those requests. Be careful and don't add super detailed information if it can be useless and add cognitive load."
    },
    {
      "title": "Engagement",
      "description": "Define 3 different mechanisms for increasing the number of returning visitors in a voice experience.",
      "tip": "It will depend on your use case, but there are always strategies you can use to make sure your users get back. Having fresh content, gamification... think about yours and give us much detail as possible."
    },
    {
      "title": "Horoscope",
      "description": "Design a horoscope voice experience. Focus on the interaction for those users that do not know their zodiac sign.",
      "tip": "Some users might not know all the information when requested. If possible you need to think about workarounds for your users to be successful in the interaction. Any idea on how to get the zodiac sign for a user?"
    },
    {
      "title": "Multiplayer game",
      "description": "Design the interaction for the settings in a multiplayer game. Customers will be able to start a new game for 1 to 4 players on the same device. Remember that is a game, make it fun!",
      "tip": "We talked on a previous challenge about how tricky it can be for ASR to properly get names. I would recommend you to think about alternatives for that."
    },
    {
      "title": "Sleeping sounds",
      "description": "Define possible features for a sleeping sounds voice experience and describe them in a customer journey.",
      "tip": "Never compromise the main feature, but is always great to think about other ways to add value. Working with customer journeys will be great here for you to understand when the different features can be useful."
    },
    {
      "title": "Daily Facts",
      "description": "Design a Daily Fact voice experience. You need to decide things like: What's the experience once the user has already requested the daily fact? Are the facts going to be the same for everybody? What happens if users skip a day? What happens when all the facts have been already played?",
      "tip": "Daily facts experiences are super used in smart speakers. They are the base interaction for many interactions like Question of the day, Poem of the day, Word of the day, and many more. Do it right with the basics to nail VUI design."
    },
        {
      "title": "Voice PIN",
      "description": "Define high level alternatives for a voice PIN authentication. Work on the Sample dialog to showcase them",
      "tip": "Be creative here. Users don't love PIN numbers. They have already too many to remember, and it's quite common to forget them. Think about alternatives which can be voice based or tech based."
    },
    {
      "title": "Timers",
      "description": "Define the MVP for a timer and create the happy path. Besides the happy path create a list of the most important use cases you can think of for timers.",
      "tip": "Users love timers in voice experiences. They are super convenient. However, there are many things you need to consider to be successful with timers: Can users create more than one timer? Can users query the time left on the timer? What pieces of information do you need to create a timer? What others might users be willing to add?"
    },
    {
      "title": "Alarms",
      "description": "Alarms. Define all the use cases that you can have around them: set an alarm? more than one? etc",
      "tip": "Watch out! Alarms can be super risky. What if an alarm goes wrong and users are late because of a poor design? Keep in mind all the thing that can go wrong and think about solutions to reduce the risk."
    },
    {
      "title": "What can I do",
      "description": "Define the answer for the utterance 'What can I do?', on an assistant like Google or Alexa.",
      "tip": "Any assumption about what user can make a request like that? What items will you recommend? How many recommendations will you make? Will it change depending on the device requested? (speaker, car, earbuds...)"
    },
    {
      "title": "House renting",
      "description": "Outline the use cases expected for a property rental voice interface. Do it for 2 different users: 1) renters 2) property owners",
      "tip": "This can be a super huge domain. Prioritize the ones that you believe can be more interesting for your users."
    },
    {
      "title": "Lights",
      "description": "Imagine a user that owns different smart lightbulbs all with the same name. List and define different strategies for disambiguating those lightbulbs when a user says 'Turn on the light'",
      "tip": "Some strategies might require users to specify the light to target, while others can be completely transparent for them."
    },
    {
      "title": "Shopping",
      "description": "Design the happy path for a shopping list voice interaction. Outline also the main features to cover for voice shopping lists.",
      "tip": "Use an MVP mentality and focus and what really needs to be nailed for shopping lists to be successful."
    },
    {
      "title": "Personality",
      "description": "Define the personality of a voice assistant for a bank. Instead of listing a set of physical characteristics focus on the traits the assistant should have.",
      "tip": "There are many tools you can use to design the assistant's personality. Persona templates, or Jung archetypes are great resources, but let me recommend you my own method. In this article you can read about how to define the personality traits for an assistant and something that I called behavioural principles."
    },
    {
      "title": "Business models",
      "description": "Define 4 ways to monetize your voice interaction for a streaming content discovery service.",
      "tip": "There's no good product that can survive with a clear business model. Here you have 2 articles I wrote that can be interesting for you to define your strategy: [How to make money in voice interfaces](https://uxdesign.cc/how-to-make-money-with-voice-interfaces-84b1f89fd6bf) - [Advertising in voice interfaces](https://uxdesign.cc/advertising-in-voice-interfaces-4b1ca14fa28b)"
    },
    {
      "title": "Voices",
      "description": "Choose the voice (TTS or recorded) and provider (Polly, Microsoft, Google...) that you would use for the following use cases: - Voice interaction for a popular TV game - Bed time stories with more than 100 different stories - Sport news highlights - Car control features",
      "tip": "This for you to learn about the different possibilities and providers and to start diving deep on them. They can all vary depending on your end user, but at this stage it can be good enough just with a superficial overview from your end."
    },
        {
      "title": "Ordering pizza",
      "description": "For a food ordering voice service, what contextual information would you take into account? Why? e.g.: Customer's age - Because I can adapt the suggestions based on...",
      "tip": "Situational design talks about creating experiences that are adapted to the customer context. You will not always have access to any detail that you want from your user, but think big for this one and suggest whatever could be interesting for the case. You can read about situational design in this blog post:[https://uxdesign.cc/how-to-design-voice-alexa-situational-design-airtable-b451b5011925](https://uxdesign.cc/how-to-design-voice-alexa-situational-design-airtable-b451b5011925)"
    },
    {
      "title": "Voice PIN",
      "description": "Design a Voice PIN authentication experience for the utterance 'Open the door'. Don't work just on the happy path but in all the situations that need to be designed based on all the possibilities.",
      "tip": "There are many things that can go wrong when a customer needs to use a voice PIN. Figure them all and prepare a design to help your users to be successful."
    },
    {
      "title": "Basketball",
      "description": "Design the happy path for a basketball results voice interaction. Who was playing? What was the result? Will you include any stats?",
      "tip": "You will need to deal here with cognitive overload and also with context. Stats and results can get super messy very soon in users minds. Understanding what information are users requesting depending the status of a game will make a huge difference in your experience."
    },
    {
      "title": "SMS",
      "description": "Design an SMS readout voice interaction. What information will you share from each message? How many messages will you read? Will you add breaks for the customer to interact?",
      "tip": "This is a super interesting use case! You have no control over SMS content, but you need to prepare the interaction for whatever users want to do with them. Cognitive overload applies here, along with users being able to access and hear each message if they need to. Have fun!"
    },
    {
      "title": "Lights",
      "description": "Design a voice interaction for smart lights. What use cases will you cover? Work on the sample dialogs for all those use cases.",
      "tip": "For success prompts 'Ok' should be more than enough. If you want to dive deep in the use case think about all the corner cases that might not be that straightforward."
    },
    {
      "title": "Interactive Pet",
      "description": "Design an interactive pet voice interaction. What tasks will users need to do with the pet? Will you use notifications?",
      "tip": "You need to balance creating an engaging experience with doing something that bothers users very much. Good luck!"
    },
    {
      "title": "Blackjack",
      "description": "Design the blackjack game for a voice experience.",
      "tip": "This can be easy but as they say, God is in the details. Do your best for creating a super engaging experience for your users to come back."
    },
    {
      "title": "Food Trucks",
      "description": "Design a food truck voice experience. The number of available trucks can vary from 3 to more than 50. How would you deal with the different possible dishes? What's the value proposition for your VUI?",
      "tip": "With many options available users can get blocked and end up stepping out your service. The great thing is that food ordering is a great use case where users are more than open to receive and accept suggestions. Take that into account and create something that is as simple as possible for your customers to be successful."
    },
    {
      "title": "Thermostats",
      "description": "Design a thermostat voice experience. What use cases will you cover? Define the happy path for each one.",
      "tip": "Be as detailed as you want. This is expected to be a super straightforward interaction, and your users will have super high expectations for you do it right. Take into account that there's normally different rooms with temperature needs at home and users might want to adjust that very much."
    },
    {
      "title": "Bedtime stories",
      "description": "Design a bed time stories voice interaction for young kids. How many stories will you offer? Will they be able to ask for their favourite one? Can kids request a follow-up story?",
      "tip": "You might need to set different age thresholds for kids here. Also take into account a couple of things: Some kids just want to keep playing again and again one specific story. Some kids know the stories for the content and not for the title. Cognitive load for kids is trickier to manage. Do something that is easy to interact with."
    },
        {
      "title": "Personal interviews",
      "description": "Design an interview coach for helping candidates join any org that you want. Decide the use cases that you want to cover and how the interaction is guided.",
      "tip": "This can be a great resource for many but finding the right use case will be critical. Can you think of something useful for coaching candidates? Try to understand how you can give them value!"
    },
    {
      "title": "Allergies",
      "description": "Create an allergies voice experience. Users can ask for the allergy season, create alarms, or ask about allergies from a specific item.",
      "tip": "You might have 2 different experiences here: Users setting up the experience with their allergy triggers and their daily use after setting up the account. Think also about how to deal with different users on the household."
    },
    {
      "title": "Clothing",
      "description": "Design a dress assistant. This voice experience recommends you what to wear every day.",
      "tip": "You will need to think not only on the current weather, but also on how the weather is going to be. It would be a delight as well to consider your previous recommendations and how they fit the user. One last thing... how would you deal with male and female recommendations?"
    },
    {
      "title": "Classroom",
      "description": "Design a voice assistant that can help teachers in the school. Just brainstorm the use cases that could be interesting in this context.",
      "tip": "Again, the age of the students are crucial. You can decide to create something that fits them all, create something for each age range, or just focus in one specific group and try to help in the problems they have in the classroom. Good luck!"
    },
    {
      "title": "Interactive ads",
      "description": "Create a voice interactive ad. What would be the goal for that ad. Think also how that ad would be discovered, will it be an experience pushed from the assistant or something requested from the user?",
      "tip": "There are a few constraints for advertising in voice services. You can see them here along with some other ideas to inspire you: [https://uxdesign.cc/advertising-in-voice-interfaces-4b1ca14fa28b](https://uxdesign.cc/advertising-in-voice-interfaces-4b1ca14fa28b)"
    },
    {
      "title": "Multi-device",
      "description": "Brainstorm multidevice experiences that can make sense for voice. It can be any combinations of devices that you want but focus on creating real value for the customers with the use cases.",
      "tip": "Multidevice experiences are a super project to work on for an interaction designer. However, being honest, users find it really difficult for going from one device to another. Keep that in mind when thinking about experiences that make sense!"
    },
    {
      "title": "Podcast listeners",
      "description": "Define 3 happy paths for a podcast voice experience for 3 different audiences and topics: humor 18 year-old-audience; history 50 year-old-audience; fashion 35 year-old-audience. Will you change the wording only or also the features?",
      "tip": "The idea of this challenge is to evaluate and decide not only the verbiage but also if the different audiences might require different features. Do some research and try to figure out what's the potential customer for each podcast, understand their needs and design the experience. You might even end up deciding to prioritize one specific device over others!"
    },
    {
      "title": "Pizza cooking",
      "description": "Create a pizza margherita cooking voice experience. Focus on the interaction for telling the ingredients, the information on each step, how you handle the timing for users to complete each step, and how to pause, resume, or stop the cooking.",
      "tip": "Focus only on the steps. Cooking is one of the domains where voice interactions seem to make more sense. Users in the kitchen, dealing with pans and the hands dirty with every kind of ingredient, and trying to remember a recipe they barely know... However, dealing with it the right way has a lot of challenges. Users need to follow and understand the recipes while they are cooking, which can make the whole experience a multitask mess. Try to understand as much as possible how it is to follow a recipe and create something that can help your users to be successful."
    },
    {
      "title": "Cooking experience",
      "description": "Define the use cases for a cooking voice interaction and design the happy path.",
      "tip": "We created the steps for cooking a pizza yesterday. What other interactions are needed for creating a cooking product? From finding the right recipe, to anything else you can imagine, there can be a lot of things going on for creating the perfect dish. Be creative with the features, but don't get crazy with the interactions!"
    },
    {
      "title": "Currency converter",
      "description": "Design a currency converter. Customers can ask for the conversion of any amount of money between any two currencies.",
      "tip": "This should be super easy for your users! However, there are 3 slots your users need to fill. You need to make sure users are free to communicate those 3 slots in the way they want. What will you do if any of those slots are empty? Can you make any assumption to fill that gap for the customer?"
    },
        {
      "title": "Board games",
      "description": "Select 5 classic game boards that could benefit from a transmedia experience (board game + voice experience), and define what role the voice experience would play in the game.",
      "tip": "There are 3 classic roles for voice assistants in board games: Dungeon master (the assistant leads the game), Rules and set up helper (the assistant guides the users on how to play the game), Another player (the assistant plays the role of a different player in the game). Use these roles or think about new possible ones and select the board games that you believe could benefit the most."
    },
    {
      "title": "Restaurants",
      "description": "Design a restaurant booking voice experience.",
      "tip": "What are the pieces of information you need to complete the booking? What needs might your customers have around restaurant booking? There can be dozens of things your users could request. Try to be proactive and offer the most important information upfront."
    },
    {
      "title": "Riddles",
      "description": "Design the decision flow for a riddle voice interaction. You will guide users in an make story where they need to solve brain games to pass the game. Don't pay much attention to the story but to the interactions. Focus on how you will handle the answers to the riddles: will you completely block the game until the riddle is solved? Will you give hints? Will those hints be based on time or any other factor? Anything else?",
      "tip": "You need to balance the complexity of the games with creating an experience that's not frustrating for users that don't get it right the first time. Prepare alternatives for the users to keep going and be engaged."
    },
    {
      "title": "Money transfers",
      "description": "Create a voice experience for sending money to any mobile phone. Design the full experience, including returning users and error handling.",
      "tip": "This can be a super convenient experience but also a risky one. Put mechanisms in place to make sure that transactions are not sent with errors. Think also about measures to make it easier for users to get back and want to reuse transactions."
    },
    {
      "title": "Translations",
      "description": "Design the experience for a translating voice service.",
      "tip": "Being able to understand foreign languages is always the dream for many users. Think about the use cases that you want to cover and define the experience for each of them. Think also about features that can improve the translation for your customers."
    },
    {
      "title": "Screen control",
      "description": "Design a voice experience to control the interaction of a screen.",
      "tip": "Think about the most important use cases you believe need to be covered in your interaction. There might be use cases around the settings of the screen and also about anything related to the graphic interaction: scrolling down, swipe, touch... This can get super crazy, so you better focus on the cases you believe that can create more value for the user, while reaching their expectations."
    },
    {
      "title": "Multi user quiz",
      "description": "Create a multi user quiz. Decide the number of possible players and how they get into the game. Focus only on the setting parts and the game play and use placeholders for the game questions.",
      "tip": "There are at least two interesting challenges here: The interaction for setting the number of players: I would recommend you to avoid asking for real names since they can bring ASR problems. Managing the turns between users to make it interesting and engaging for all of them."
    },
    {
      "title": "Authentication",
      "description": "Brainstorm 5 methods to authenticate customers. You can use multidevice experiences.",
      "tip": "Some authentication methods will require more complex interactions, but also not every method will be as safe as the others for your users. Depending on the use case you can decide what authentication method you will need."
    },
    {
      "title": "Timers 2",
      "description": "Timers. Define all the use cases that you can have around them.",
      "tip": "I don't expect you to define all the interactions now. Knowing and defining the use cases is equally important to design a product. What are your users willing to do when they set a timer? Do they need to create different timers? What for? Understand all the complexity and define what you will cover."
    },
    {
      "title": "Text messaging",
      "description": "Define and prioritize the features for a text messaging service that can be used via voice.",
      "tip": "Text messages are a super convenient use case. However, trying to replicate all the features you can have with a GUI is unrealistic. Try to understand the features needed for an MVP and nail them for your users!"
    },
    {
      "title": "Messages readout",
      "description": "Design the interaction for reading received text messages. Use an MVP approach and define only the first release, and phase the following ones.",
      "tip": "Dive deep in the interaction of reading available messages. Here you have some important questions you should take into account: How many messages do you read? How do you prioritize them? How much information do you read for each one? How long should you go back in time for messages? Do you pause the reading between messages or just read all the available ones?"
    },
    {
      "title": "Voice PIN 2",
      "description": "Design an interaction for a voice PIN authentication. Take into account valid and invalid characters, length, number of attempts.",
      "tip": "There are many chances for users to say PIN numbers wrong, and using the error messages to provide some help can be interesting. However, you need to consider also possible attacks from bad actors trying to break into the service. I would suggest you to work on different mechanisms to recover from a wrong PIN, and then decide which one is better depending on the use case and the safety implications."
    },
    {
      "title": "Vehicle disambiguation",
      "description": "Design a disambiguation interaction after the remote request 'Start my car'. There's no limit of possible cars available. Each car can have a friendly name given by the customer, but it can be shared by several. You also have the information about make, model, year, and some other attributes (e.g.: color) for each vehicle.",
      "tip": "There are a few things you can use to identify a car: make, model, year, color, plate number... What if some of them are the same between different cars? Would you list all the characteristics you have for your users to disambiguate? There's a possible quick fix if you allow customers to provide a friendly name but, what happens if that friendly name matches as well or was not defined? Have fun!"
    },
    {
      "title": "Content Discovery",
      "description": "Design a streaming content discovery voice interaction that helps users find something to watch across multiple platforms",
      "tip": "This can be a fun voice interaction. There are a few things you should take into account: Users might want different types of recommendations (what's new, what's popular, similar to something they liked, by genre, by mood, by length). Available items on a list need careful consideration - how many options before it becomes overwhelming? Content information can include many details (Title, cast, rating, duration, plot, reviews...). You'll need to decide which ones are the most important pieces, and how users can access additional details if interested."
    },
    {
      "title": "Learning Languages",
      "description": "Design the happy path for a language learning voice experience in Alexa or Google",
      "tip": "Make sure that your proposal is feasible with the available technologies. First tip, in most platforms you will not be able to capture the users sounds to review the accent. This is a great case where you will need to fully understand the tech to create something that helps users learn a language despite the tech limitations."
    },
    {
      "title": "Make-up",
      "description": "Design a make-up voice experience for devices with and without screen",
      "tip": "This can be a super convenient use case but, is it possible to lead a make-up session only with your voice? How would reduce the possible frictions in a voice only experience and help your users be successful with their make-up? We can reinvent the domain and think about it as a step by step guide similar to what we do with cooking voice experiences. If you want to keep working on the experience and define the design for a voice-first multimodal interaction, you can read this article about multimodal devices: [https://uxdesign.cc/design-tips-alexa-multimodal-devices-6eb1c6ce134e](https://uxdesign.cc/design-tips-alexa-multimodal-devices-6eb1c6ce134e)"
    },
    {
      "title": "Medical check-up",
      "description": "Design a medical daily checkup. Decide if all the interaction is going to be voice only or if there might need some previous UI settings.",
      "tip": "Health care is one of the most exciting fields for digital transformation right now. However, voice interactions can get super messy and we might end up not meeting user's expectations. Keep it simple, and focus on creating an interaction that can be useful for your users but do not overcomplicate things with open questions or putting much pressure in our NLU models. Mind also the returning experience and how you will create a delightful experience for your users to keep coming back. Ada Health is a great resorce for inspiration. If you want to learn more about how to deal with vui patterns you might find this article interesting: [https://uxdesign.cc/design-patterns-in-voice-interfaces-628a169294ec](https://uxdesign.cc/design-patterns-in-voice-interfaces-628a169294ec)"
    },
    {
      "title": "Events nearby",
      "description": "Design a voice experience for Events nearby. You have a dataset with thousands of events that are tagged with anything that you need.",
      "tip": "This is a great example on how to deal with enormous datasets and how to serve the best information for your users. There are different strategies you can follow to deal with lists and shorten them down but I'll leave you the excitement of exploring them by yourself."
    },
    {
      "title": "Calendars",
      "description": "Design a calendar: How do you add new events? How do you cancel them? What information can users add to each event? How do users know about the events on a date? Is there any proactive information?",
      "tip": "You can go bananas with this use case! Focus on the features that can really add value via voice, without making the interaction crazy for your users. This can also get super boring if you make your users fill a super long form for creating an event. What's the required information for creating an event? What is optional?"
    },
    {
      "title": "Premium service",
      "description": "Design a subscription voice interaction for a streaming music platform. What will you give for free? How will users know about the paid version? Will you use proactive messaging? What will be the upsell frequency? Any cases where upsell will not be offered?",
      "tip": "The only goal you have here is to define an experience that can make your product financially successful without bothering your users. We all need things and buy some from time to time. We are happy to purchase that we find useful or makes us happy. There should not be harm on letting your users know what you can provide if it is useful for them."
    },
    {
      "title": "Diet",
      "description": "Create a voice experience to help users organize their diet. What can I eat today?",
      "tip": "This can be a great experience if you are able to: Adapt the diet to your users needs, Keep track of what was recommended and provide variety and a solid plan (not just random recommendations), Take into account your customer feedback. How do you mix all that to create a wonderful experience?"
    },
    {
      "title": "Restaurants recommendations",
      "description": "Create a restaurant recommender. What use cases will you cover? What information will be interesting for you to save for future interactions? Any contextual information you might need to use? If you offer the restaurant address how are you going to give the address details?",
      "tip": "I think you have 3 interesting challenges here: How to get the details from the customer for providing a better recommendation. Users hate to fill super long forms, but they hate as well bad recommendations. How to reach the user expectations and provide the features they need. How to share the information in a manner that it is easy for the customer to understand in a voice experience."
    },
    {
      "title": "Baby pregnancy",
      "description": "Design a baby pregnancy voice experience and define the most interesting sample dialogs. What different sections does your voice experience have? What will be the use case? How the experience will evolve over time?",
      "tip": "These services provide useful information for pregnant women and help them keep track of the different baby metrics. Timing is key in this use case, and things and features will vary depending on the due date. Don't try to copy one of the existing mobile apps, but try to add value to your users in a conversational way. This is a great example for you to use Situational Design. Here you have an article on how to use it in a simple way: [https://uxdesign.cc/how-to-design-voice-alexa-situational-design-airtable-b451b5011925](https://uxdesign.cc/how-to-design-voice-alexa-situational-design-airtable-b451b5011925)"
    },
    {
      "title": "Wearables",
      "description": "Define a voice experience for a wearable that helps you when you are running. What are the use cases that you will cover? Do you need any specific tech support? (GPS?, companion app? anything else?)",
      "tip": "Remember that your users will be doing sport and speaking and thinking might be slightly compromised. Avoid super complex multi turn experiences (at least while running), and make your best to provide the right information for your users as fast as possible."
    },
    {
      "title": "Job finding",
      "description": "Design a job finding experience. Define the MVP and describe what features you would like to cover in the voice experience. Work also in the most relevant Sample Dialogs.",
      "tip": "This can be the use case for these days, right? If I were you I would: Analyze the different profiles you might have looking for jobs, and decide which one you are going to target. Understand their journey to find a job, and focus in their existing pain points. Work on a solution that can help in that journey in a voice experience only."
    },
    {
      "title": "Multi device authentication",
      "description": "Design a multi device authentication interaction (VUI + GUI). Define all the possible scenarios depending on the fulfilment of the different steps on each device.",
      "tip": "An authentication process helps you validate that your users have permissions to complete the interaction in your platform. To make 100% sure that you are not dealing with a bad actor trying to break your service, you might need to use different devices and services and make your users jump from one to the other."
    },
    {
      "title": "Proactive notifications",
      "description": "Design a proactive notifications service for a voice assistant",
      "tip": "There are some challenges you need to face here: What will be the notifications for? Audio orchestration: Will the notification interrupt anything ongoing in the voice assistant? Will the notification play a full message or only a chime and users will need to request the message? Will the notifications allow users interaction? Can you have different notifications together?"
    },
    {
      "title": "Actions schedule",
      "description": "Design an interaction to schedule an action (e.g. starting the heater). Decide if customers can set the time, the date, or the frequency, and define the interaction.",
      "tip": "You can work on an MVP solution and provide a super limited interaction to those customers that request an action, or you can play pro and allow full flexibility to your users. I believe that making that split is also a great exercise for you, so I would start defining the MVP, and then move forward with the full experience."
    },
    {
      "title": "Fitness",
      "description": "Design a fitness voice only experience. What will be the happy path? What features will your experience include? How will you increase the customer retention?",
      "tip": "I would say that, one of the most interesting things here, is to find the right exercises for your users that are easy to follow just via voice. The second challenge would be to understand how a workout session works, to be able to provide features that are useful for your customers."
    },
    {
      "title": "Conference calls",
      "description": "Design a voice interaction for creating instant conference calls. Users can add as many people as they want via voice from an agenda already integrated in the service.",
      "tip": "Some interesting challenges you will find: Disambiguation: Users might have recorded different colleagues under the same or similar names. Recurring user: Setting up the call can become a tedious task. Think about strategies to ease the interaction for recurring visitors. Setting the call vs having the call: Will you allow users to keep setting the call and keep adding people once the call has been started? How do you orchestrate the audio?"
    },
        {
      "title": "School agenda",
      "description": "Design a school agenda voice interaction where parents and tutors can get information about the students schedule",
      "tip": "Some things to consider: Mind the verbiage: Your users might not be the student parents. You might have different types of events: Recurrent events that take place every single week (subjects and breaks, mainly), and extraordinary events that happen from time to time (exams, school events...). How are you going to treat these different events in your interaction? You can have different students in the same household. Disambiguation needs to be your friend. Slot filling and context can be crucial for you if you want to make it easier for your users to recover the info they are looking for. Think about the slots you need to fill and think about situations where you can be able to assume some of that information."
    }
];

// Generate challenges with proper structure
function generateChallenges(count) {
  const result = [];
  
  for (let i = 0; i < count; i++) {
    const challenge = i < CHALLENGES_DATA.length 
      ? CHALLENGES_DATA[i] 
      : CHALLENGES_DATA[i % CHALLENGES_DATA.length];
    
    result.push({
      id: i + 1,
      title: challenge.title,
      description: challenge.description,
      tip: challenge.tip,
      unlocked: i === 0,
      completed: false
    });
  }
  
  return result;
}