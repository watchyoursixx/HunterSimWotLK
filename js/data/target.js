var targetData = (function() {

  const CUSTOMER_TARGET_ID = 0;

 const Target_Types = Object.freeze({
      HUMANOID: 'Humanoid',
      DEMON: "Demon",
      BEAST: "Beast",
      DRAGONKIN: "Dragonkin",
      ELEMENTAL: "Elemental",
      GIANT: "Giant",
      MECHANICAL: "Mechanical",
      UNDEAD: "Undead",
      UNKNOWN: "Unknown",
      OTHER: "Other"
  });

  const TARGETS = {
      0: {
        name: 'Custom',
        armor: 0,
        phase: 1,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 83
      },
      1: {
        name: 'Level 83 10463',
        armor: 10463,
        phase: 1,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 83
      },
      2: {
        name: 'Level 73 6193',
        armor: 6193,
        phase: 1,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      3: {
        name: 'Level 73 7685',
        armor: 7685,
        phase: 1,
        resilience: 0,
        type: Target_Types.HUMANOID,
        level: 73
      },
      4: {
        name: 'Level 70 6792',
        armor: 6792,
        phase: 1,
        resilience: 0,
        type: Target_Types.MECHANICAL,
        level: 70
      },
  }

  var target = undefined;
  
  function getTarget(targetId) {
    var npc = TARGETS[targetId];
    if(npc === undefined){
      throw Error(`Invalid targetId: "{targetId}"`);
    }
    return Object(npc);
  }

  function selectTarget(targetId, type, armor, level, resilience) {   
    if(targetId === CUSTOMER_TARGET_ID){
      target = Object({
        type: type,
        armor: armor,
        resilience: resilience,
        level: level
      });
    }
    else{
      target = getTarget(targetId);
    }    
    return target;
  }

  function getCurrentTarget() {
    return target;
  }

  function getNameKeyTargetPairs(){
    var nameKeyPair = [];

    for (const [key, value] of Object.entries(TARGETS)) {
      nameKeyPair.push({id: key, name: value.name});
    } 

    return nameKeyPair.sort((a,b) => {
      //Place custom at top of list
      if(b.name.toLowerCase() === "custom"){
        return 1;
      }
      if(a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if(a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }

  return {
    getCurrentTarget: getCurrentTarget,
    selectTarget: selectTarget,
    getNameKeyTargetPairs: getNameKeyTargetPairs,
    Target_Types: Target_Types
  }

})();


//Example usage.
// var target = targetData.selectTarget(0,targetData.Target_Types.BEAST, 123, 10, 400); //Creates a customer target if 0 is passed as the targetId, returns custom target object
// var target = targetData.getCurrentTarget(); //Gets the selected target, if one is set, otherwise empty object
// var target = targetData.selectTarget(25315); //Select target and returns the obejct. Can then refernce armor/level/type like "target.armor;"
// targetData.getNameKeyTargetPairs(); //Could be used to populate a ddl for user selection