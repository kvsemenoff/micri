<div id="aa-dark-body" class=""></div>

<section class="header-top">
		<div class="container">
			<div class="row">

				<div class="col-md-3 col-sm-6 col-xs-6">
					<div class="logobox">
						<a href="/" class=""><img src="img/logo.png" alt=""></a>
					</div>
				</div>

				<div class="col-md-4 col-sm-6 hidden-xs">

					<span class="aa-degree">Конфиденциальность<br>на высшем уровне</span>
				</div>
				
				<div class="col-md-2 hidden-sm hidden-xs">
					<a href="" class="aa-key">
						Купить ключь
					</a>
				</div>
				
				<div class="col-md-3 hidden-sm hidden-xs">
					<a href="" class="aa-question">
						Задать вопрос
					</a>
				</div>
				
				<div class="hidden-lg hidden-md hidden-sm col-xs-6">
						<span class="aa-menu">
							<span><i class="fa fa-bars" aria-hidden="true"></i>
							</span>
						</span>
				</div>
				

			</div>
		</div>
</section>
<section class="header-middle header-middle">
		<div class="container">
			<div class="row">
				<ul class="menu-list-unpressed">
					<li class="aa-menu-item aa-menu-item"><a href="#" class="">Как это работает</a></li>
					<li class="aa-menu-item aa-menu-item"><a href="#" class="">Оплата</a></li>
					<li class="aa-menu-item aa-menu-item"><a href="#" class="">Документы</a></li>
					<li class="aa-menu-item aa-menu-item"><a href="#" class="">Загрузка</a></li>
					<li class="aa-menu-item aa-menu-item"><a href="#" class="">Помощь</a></li>
					<li class="aa-menu-item aa-menu-item"><a href="#" class="">Контакты</a></li>
				</ul>
			</div>
		</div>
</section>

<script>
	$(document).ready(function(){
		$('.aa-menu').click(function(){
			$('.menu-list-unpressed').toggleClass('header-top__menu-pressed');
			$('#aa-dark-body').toggleClass('aa-dark-body');
		});
		$('#aa-dark-body').click(function(){
			$('.menu-list-unpressed').toggleClass('header-top__menu-pressed');
			$(this).toggleClass('aa-dark-body');
		});


		$(window).resize(function(){


			//alert(1);
			var aa_width = $('body').width();
			var aa_left = (aa_width > 1199)? ((1200-aa_width)/10+67):
			(aa_width > 992)? ((1200-aa_width)/10+55):
			(aa_width > 768)? ((990-aa_width)/8+52):
			(aa_width > 670)? ((770-aa_width)/6+80):
			(aa_width > 630)? ((770-aa_width)/5+80):
			(aa_width > 550)? ((770-aa_width)/4.4+80):
			(aa_width > 480)? ((770-aa_width)/4+80):
			(aa_width > 440)? ((770-aa_width)/3.5+80):
			(aa_width > 410)? ((770-aa_width)/3.2+80):
			(aa_width > 390)? ((770-aa_width)/3.1+80):
			(aa_width > 370)? ((770-aa_width)/2.9+80):
			(aa_width > 350)? ((770-aa_width)/2.7+80):
			(aa_width > 330)? ((770-aa_width)/2.6+80):
			(aa_width > 310)? ((770-aa_width)/2.45+80):
			(aa_width > 0)? ((770-aa_width)/2.2+80):
			1;
			//1;

			$('.transform-box').css('left', '-' + aa_left + '%');
			//alert(aa_left);//1200 992 768 480 320
		});	

	});

</script>