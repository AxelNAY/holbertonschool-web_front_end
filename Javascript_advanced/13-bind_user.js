function logWelcomeUser(welcomeString)
{
    console.log(welcomeString + ", " + user.firstName + ". Your occupation is: " + user.occupation);
}

const user = {
    hobby:"Calligraphy",
    favoriteSport:"Hockey",
    astrologicalSign:"Aries",
    firstName:"Guillaume",
    lastName:"Johns",
    location:"Netherlands",
    occupation:"Engineer"
};

const bindLogWelcomeUser = logWelcomeUser.bind(user);

bindLogWelcomeUser('Welcome');

bindLogWelcomeUser('Hello');
