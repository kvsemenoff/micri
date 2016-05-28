<section class="header-top">
		<div class="container">
			<div class="row">

				<div class="col-md-3 col-sm-6 col-xs-6">
					<div class="logobox">
						<a href="/" class=""><img src="img/logo.png" alt=""></a>
					</div>
				</div>

				<div class="col-md-3 hidden-xs">
					<span class="aa-degree">Конфиденциальность на высшем уровне</span>
				</div>
				
				<div class="col-md-3 hidden-xs">
					<a href="" class="aa-key">
						Купить ключ
					</a>
				</div>
				
				<div class="col-md-3 hidden-xs">
					<a href="" class="aa-question">
						Задать вопрос
					</a>
				</div>
				
				<div class="hidden-lg hidden-md col-sm-6 col-xs-6">
						<span class="aa-menu">
							<span id="icon2" class=""><i class="fa fa-bars" aria-hidden="true"></i>
							</span>
						</span>
				</div>
				

			</div>
		</div>
</section>
<section class="header-middle">
		<div class="container">
			<div class="row">
				<ul class="menu-list-unpressed">
					<li class="aa-menu-item"><a href="#" class="">Как это работает</a></li>
					<li class="aa-menu-item"><a href="#" class="">Оплата</a></li>
					<li class="aa-menu-item"><a href="#" class="">Документы</a></li>
					<li class="aa-menu-item"><a href="#" class="">Загрузка</a></li>
					<li class="aa-menu-item"><a href="#" class="">Помощь</a></li>
					<li class="aa-menu-item"><a href="#" class="">Контакты</a></li>
				</ul>
			</div>
		</div>
</section>

<script>
	$(document).ready(function(){
		//alert(1);
		$('.aa-menu').click(function(){
			$('.menu-list-unpressed').toggleClass('header-top__menu-pressed');
		})
	});

</script>