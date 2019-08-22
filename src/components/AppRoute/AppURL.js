class AppUrl {
    home() {
        return '/'
    }

    dashboard() {
        return '/dashboard/'
    }

    transaction() {
        return '/transaction/'
    }

    sent() {
        return '/sent/'
    }

    receive() {
        return '/receive/'
    }

    account() {
        return '/account/'
    }

    profile() {
        return `${this.account()}profile`
    }

    submit() {
        return `${this.account()}submit`
    }

    support() {
        return '/support/'
    }

    login() {
        return '/login/'
    }

    register() {
        return '/register/'
    }


}

export default new AppUrl();
