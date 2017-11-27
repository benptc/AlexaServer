#!/usr/bin/env bash

CMD=$1

function skill {
    (cd apps/RealityEditorSkill; git add .; git commit -m 'updates via deploy script'; git push origin master)
}

function server {
    git add .;
    git commit -m 'updates via deploy script';
    git push origin master;
    git push heroku master;
}

function usage {
    echo "Usage: $(basename $0) COMMAND

  COMMANDS:

    skill    commit and push the RealityEditorSkill submodule
    server   commit and push the server and deploy to heroku
";
    exit 1;
}

case $CMD in
    (skill) skill;;
    (server) server;;
    (*) usage;;
esac

exit 0;