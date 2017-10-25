var leader = {
    name: "Василий Иванович",
    age: 35
};
console.log(leader);

var leader_json=JSON.stringify(leader);
console.log(leader_json);

var leader_json_object=JSON.parse(leader_json);
console.log(leader_json_object);