os=$(uname | tr '[:upper:]' '[:lower:]')

if [[ $os == linux* ]]; then
    mongod --config ./mongo/mongod.conf
elif [[  os == "linux*" ]]; then
    "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath=".\mongo\data\db"
else
    echo $os
    echo Unexpected OS
fi;
