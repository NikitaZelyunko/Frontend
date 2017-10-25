var leader = {
    id: 1,
    name: "Василий Иванович"
};

var  soldier = {
    id: 2,
    name: "Петька"
};

leader.soldier_id=2;
soldier.leader_id=1;

var team= [leader, soldier];
console.log(team);

var team_json=JSON.stringify(team);
console.log("\n",team_json);

var team_json_object=JSON.parse(team_json);
console.log("\n",team_json_object);
