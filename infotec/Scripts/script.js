$(document).ready(function () {
  //menu
  var btnMenu = document.getElementById('btn-menu')
  var nav = document.getElementById('nav')
  btnMenu.addEventListener('click', function () {
    nav.classList.toggle('muestrate')
  })
  $('.category_list .category_item[category="all"]').addClass('ct_item-active')

  //filtrado

  $('.category_item').click(function () {
    var catProduct = $(this).attr('category')
    console.log(catProduct)
    $('.category_item').removeClass('ct_item-active')
    $(this).addClass('ct_item-active')
    $('.product-item').css('transform', 'scale(0)')
    function hideProduct() {
      $('.product-item').hide()
    }
    setTimeout(hideProduct, 400)
    function showProduct() {
      $('.product-item[category="' + catProduct + '"]').show()
      $('.product-item[category="' + catProduct + '"]').css('transform', 'scale(1)')
    }
    setTimeout(showProduct, 400)
  })
  $('.category_item[category="all"]').click(function () {
    function showAll() {
      $('.product-item').show()
      $('.product-item').css('transform', 'scale(1)')
    }
    setTimeout(showAll, 400)
  })
  $('.imagen-item').click(function (e) {
    var img = e.target.src
    var modal =
      '<div class="modal" id="modal"><img src="' +
      img +
      '" class="modal__imagen" /><div class="modal__boton" id="modal__boton">X</div></div>'
    $('body').append(modal)
    $('#modal__boton').click(function () {
      $('#modal').remove()
    })
  })
})
