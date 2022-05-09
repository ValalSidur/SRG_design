	$(function(){
  			$("[data-toggle='tooltip']").tooltip(); //para tooltips
  			$("[data-toggle='popover']").popover(); //para popover
  			$('.carousel').carousel({
  				interval: 2000
  			});
  			$('#contacto').on('show.bs.modal', function(e){
  				console.log("El modal contacto se esta mostrando.");
  				$('#btncontacto').removeClass('btn-outline-success');
  				$('#btncontacto').addClass('btn-danger');
  				$('#btncontacto').prop('disabled', true); //Acceder a las propiedades
  			});
  			$('#contacto').on('shown.bs.modal', function(e){
  				console.log("El modal contacto se mostro.");
  			});
  			$('#contacto').on('hide.bs.modal', function(e){
  				console.log("El modal contacto se oculta.");
  				$('#btncontacto').removeClass();
  			});
			$('#contacto').on('hidden.bs.modal', function(e){
  				console.log("El modal contacto se oculto.");
  				$('#btncontacto').removeClass();
  			});
  		});