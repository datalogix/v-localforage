module.exports = {
    hooks: {
        'commit-msg': 'commitlint -e $GIT_PARAMS',
        'pre-commit': 'npm run lint',
        'pre-push': 'npm run lint'
    }
};
