<!DOCTYPE html>
<html data-ng-app="ngBoilerplate" data-ng-controller="AppCtrl">
<head>
    <title data-ng-bind="pageTitle"></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!-- font awesome from BootstrapCDN -->
    <link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
    <!-- compiled CSS -->
    <link rel="stylesheet" type="text/css" href="assets/ng-boilerplate-0.3.1.css" />
    <!-- compiled JavaScript -->
    <script type="text/javascript" src="vendor/angular/angular.js"></script>
    <script type="text/javascript" src="vendor/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
    <script type="text/javascript" src="vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js"></script>
    <script type="text/javascript" src="vendor/angular-ui-router/release/angular-ui-router.js"></script>
    <script type="text/javascript" src="vendor/angular-ui-utils/modules/route/route.js"></script>
    <script type="text/javascript" src="vendor/jquery/jquery.js"></script>
    <script type="text/javascript" src="src/app/about/about.js"></script>
    <script type="text/javascript" src="src/app/app.js"></script>
    <script type="text/javascript" src="src/app/channels/channels.js"></script>
    <script type="text/javascript" src="src/app/home/home.js"></script>
    <script type="text/javascript" src="src/common/plusOne/plusOne.js"></script>
    <script type="text/javascript" src="templates-common.js"></script>
    <script type="text/javascript" src="templates-app.js"></script>

    <link type="text/css" href="assets/skin/jplayer.blue.monday.css" rel="stylesheet" />
    <script type="text/javascript" src="assets/jquery.jplayer.min.js"></script>
    <script type="text/javascript">
        //<![CDATA[
        var radio_url=" ";
        $(document).ready(function(){
            $("#jquery_jplayer_1").jPlayer({
                ready: function (event) {
                    $(this).jPlayer("setMedia", {
                        m4a: radio_url,
                        mp3: radio_url
                    });
                },
                swfPath: "http://jplayer.org/latest/js",
                supplied:"mp3,m4v",
                oggSupport: false,
                preload:"auto",
                size: "Audio:0px"
            });
        });
        //]]>
    </script>


    <?PHP
                       include 'login.php';
                       $sql_select  =  "SELECT name, url, vote FROM stations ORDER BY vote DESC";
                       $result  = mysql_query($sql_select);
                       while($row = mysql_fetch_array($result)){
                            $data[] = array('name'=>$row['name'],
    'url'=>$row['url'],
    'vote'=>$row['vote']);
    }
    $json =  json_encode($data);
    mysql_close();
    ?>
    <script>
        var unparsedUrlList = '<?= $json;?>';
        var parsedUrlList=JSON.parse(unparsedUrlList);
    </script>

</head>
<body>
<div class="body_background">
<div class="masthead without_padding">
    <div class="container">
        <div class="navbar transparent navbar-inverse">
            <div class="navbar-inner header_dotted">
                <div class="container">
                    <ul class="nav">
                        <li  style="border-left: none" data-ui-route="/home"> <!--transport this to css asap-->
                            <a href="#/home">
                                <img src="assets/plus_logo_small.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="#test">
                                <img src="assets/Buttons/On_Button.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="#/">
                               СЕЙЧАС ИГРАЕТ:<p class="nowPlaying"></p>
                            </a>
                        </li>
                        <li>
                            <a id="ma" href="#/">
                                Главная
                            </a>
                        </li>
                        <li>
                            <a href="#/channels">
                                Все каналы
                            </a>
                        </li>
                        <li>
                            <a class="ma2" href="#/">
                                Контакты
                            </a>
                        </li>
                        <li style="border-right: none"> <!--transport this to css asap-->
                            <a href="#/">
                               <img onmouseover="this.src='assets/Buttons/facebook-on.png'" onmouseout="this.src='assets/Buttons/facebook-off.png'" src="assets/Buttons/facebook-off.png"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container header_bar">
            <div class="header_image">
                <img src="assets/header_bar.png"/>
                <div>
                    <h2>Лучшие радиостанции России и Европы</h2>
                    <h4>ТОЛЬКО У НАС ВЫ МОЖЕТЕ ПРОГОЛОСОВАТЬ ЗА ВАШУ ЛЮБИМУЮ СТАНЦИЮ</h4>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mid_mass container-fluid">

    <div class="container" id="play_find" data-ui-view="main"></div>

    <div id="jquery_jplayer_1" class="jp-jplayer"></div>
    <div id="jp_container_1" class="jp-audio">
        <div class="jp-type-single">
            <div class="jp-gui jp-interface">
                <ul class="jp-controls">
                    <li><a href="javascript:;" class="jp-play" tabindex="1">play</a></li>
                    <li><a href="javascript:;" class="jp-stop" tabindex="1">stop</a></li>
                </ul>
            </div>
            <div class="jp-title">
            </div>
            <div class="jp-no-solution">
                <span>Update Required</span>
                To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
            </div>
        </div>
    </div>

    <footer class="footer my_footer">
        <div class="ul_margin">
            <ul class="hr">
                <li>
                    <img src="assets/arrow_button.png"/>
                    <a href="#/">ГЛАВНАЯ</a>
                </li>
                <li>
                    <img src="assets/arrow_button.png"/>
                    <a href="#/channels">КАНАЛЫ</a>
                </li>
                <li>
                    <img src="assets/arrow_button.png"/>
                    <a data-toggle="popover" data-placement="top" data-content="title"  href="#/">КОНТАКТЫ</a>
                </li>
            </ul>
        </div>


    </footer>
</div>
<script type="text/javascript">
    $('#play_find').on('click', '.play_this', function () {
        if($(this).attr('playing')==='off'){
            radio_url=$(this).attr('stream');
            $("#jquery_jplayer_1").jPlayer( "clearMedia" );
            $("#jquery_jplayer_1").jPlayer("setMedia",
                    {
                        m4a: radio_url,
                        mp3: radio_url
                    }
            );
            $("#jquery_jplayer_1").jPlayer("load");
            $("#jquery_jplayer_1").jPlayer("play");
            var nameNowPlaying=$(this).attr('name');
            $('.nowPlaying').text(nameNowPlaying);
            $(this).attr('playing','on');
        }
        else{
            $(this).attr('playing','off');
            $("#jquery_jplayer_1").jPlayer("stop");
        }
    });
    $('#play_find').on('click','.test_vote',function(){
        vote_name = $(this).attr('name');
        $.post(
                "increment_vote.php",
                {
                    name: vote_name
                },onAjaxSuccess
        );
        function onAjaxSuccess(data)
        {
            alert(data);
        }
    });

</script>
</div>
</body>
</html>
