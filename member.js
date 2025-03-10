function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'modules/skills/views/member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindController: true,
    scope: {
        member: '='
    }
  };
}