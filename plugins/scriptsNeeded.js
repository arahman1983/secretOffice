$('#certModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('#userName').text(recipient)
  modal.find('.modal-body #userId').val(recipient)
})


$('#deleteModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) 
  var recipient = button.data('whatever') 
  var modal = $(this)
  modal.find('#userName').text(recipient)
  modal.find('.modal-body #userId').val(recipient)
})

