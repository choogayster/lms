SignInController.$inject = ['SignInService', '$state']
function SignInController(SignInService, $state) {
	var vm = this;

	vm.model = {
		email : '',
		password : '',
	}

	vm.util = {
		alerts : [],
	}

	vm.closeAlert = function(index) {
    vm.util.alerts.splice(index, 1);
  };

	vm.signIn = function () {
		vm.util.alerts = [];
		SignInService.signIn(vm.model)
		.then(
			function (data) {
				$state.go('content.home');
			}, function (err) {
				vm.util.alerts.push({type: 'danger', msg: err});
			}
		);
	}
}