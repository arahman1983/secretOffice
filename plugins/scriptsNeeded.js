//======================== for send data to modal ====================================

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

//====================== feed back Script ============================================

function showMessage(isTrue,message){
            $("#feedBack").removeClass("opacity");
            if(isTrue){
                $("#feedBack i").addClass("far fa-check-circle text-info").removeClass(("fas fa-exclamation-triangle text-danger"))
                $("#feedBack p").addClass("text-info").removeClass("text-danger")
                $("#feedBack p").text(message)
            }else{
                $("#feedBack i").addClass("fas fa-exclamation-triangle text-danger").removeClass("far fa-check-circle text-info")
                $("#feedBack p").addClass("text-danger").removeClass("text-info")
                $("#feedBack p").text(message)
            }
        }

function hideMessage(){
            $("#feedBack").addClass("opacity");
        }

$(document).mouseup(function(e) 
            {
                var container = $("#feedBack");
                if (!container.is(e.target) && container.has(e.target).length === 0) 
                {
                    hideMessage()
                }
            });

//====================== feed back HTML ============================================
// <div class="feed-back opacity" id="feedBack">
//         <span class="feedback-close" onclick="hideMessage()">x</span>
//         <i id="feedBackIcon" class=" fa-3x"></i>
//         <p>رسالة</p>
// </div>
//===================== feed back style =============================================
/*
.feed-back{
    width: 30vw;
    padding: 2em;
    background: #FFF;
    position: absolute;
    z-index: 999;
    top: 33vh;
    border-radius: 0.5em;
    box-shadow: grey 0px 0px 10px;
    left: 33vw;
    text-align: center;
    opacity: 1;
    transition: all 0.5s;
}

.feed-back.opacity{
    opacity: 0;
    width: 0vw;
    height:0vh;
    top: 50vh;
    left: 50vw;
    transition: all 0.5s;
}

.feedback-close{
    color: var(--dark);
    position: absolute;
    color: var(--dark);
    position: absolute;
    top: 0.5em;
    left: 1em;
    cursor: pointer;
    padding: 0.5em 1em;
}
*/
