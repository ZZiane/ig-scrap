class Account {
    constructor(id, username, followers, following, description, isPrivate, publications, stories) {
        this.id = id;
        this.username = username;
        this.followers = followers;
        this.following = following;
        this.description = description;
        this.isPrivate = isPrivate;
        this.publications = publications;
        this.stories = stories;
    }
}

module.exports = Account;