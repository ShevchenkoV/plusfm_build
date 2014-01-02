angular.module('templates-app', ['about/about.tpl.html', 'channels/channels.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=row-fluid>\n" +
    "    Здесь будут контакты\n" +
    "</div>");
}]);

angular.module("channels/channels.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("channels/channels.tpl.html",
    "    <hr class=\"split_top\">  <!--first dashed line-->\n" +
    "    <div class=\"adv_image\" data-ng-controller=\"ChannelsCtrl\"><img src=\"assets/advertising-2.png\"/></div>\n" +
    "    <hr class=\"split_top\"><!--second dashed line-->\n" +
    "\n" +
    "    <div class=\"row-fluid\" data-ng-repeat=\"iterator in parsedUrlList.range()\">\n" +
    "        <article class=\"span3 radio split_invisible_helper\" data-ng-repeat=\"value in parsedUrlList.slice(iterator,iterator+4)\">\n" +
    "                <p>{{value.name}}</p>\n" +
    "                <div class=\"row-fluid\">\n" +
    "                    <div>\n" +
    "                        <div class=\"span8 split_vertical\">\n" +
    "                            <button class=\"btn btn-large test_vote\" name={{value.name}} type=\"button\">Голосовать</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"span4\">\n" +
    "                            <a class=\"play_this\" name={{value.name}} stream=\"{{value.url}}\" playing=\"off\" href=\"#/channels\">\n" +
    "                                <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/></a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "         </article>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <ul class=\"round_button_nav\">\n" +
    "            <a href=\"#/channels\" class=\"round_button\">1</a>\n" +
    "            <a href=\"#/channels\" class=\"round_button\">2</a>\n" +
    "            <a href=\"#/channels\" class=\"round_button\">3</a>\n" +
    "            <a href=\"#/channels\" class=\"round_button\">4</a>\n" +
    "        </ul>\n" +
    "    </div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "<a name=\"test\"></a>\n" +
    "\n" +
    "\n" +
    "        <div data-ng-controller=\"HomeCtrl\">\n" +
    "            <hr class=\"split_top\">\n" +
    "            <div class=\"row-fluid\">\n" +
    "\n" +
    "                <article class=\"span3 radio\" data-ng-repeat=\"iterator in parsedUrlList.range()\">\n" +
    "                    <p>{{iterator.name}}</p>\n" +
    "\n" +
    "                    <p>Информация</p>\n" +
    "                       <div class=\"row-fluid\">\n" +
    "                        <div class=\"span6\">\n" +
    "                            <ul>Из</ul>\n" +
    "                            <ul>Стиль</ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"span6\">\n" +
    "                            <ul>Россия</ul>\n" +
    "                            <ul>Играем всё</ul>\n" +
    "                        </div>\n" +
    "                        <img src=\"assets/Buttons/europa_logo.png\"/>\n" +
    "                           <div>\n" +
    "                            <div class=\"span8 split_vertical\"><button class=\"btn btn-large test_vote\" name={{iterator.name}} type=\"button\">Голосовать</button></div>\n" +
    "                            <div class=\"span4\"><a class=\"play_this\" name={{iterator.name}} stream={{iterator.url}} playing=\"off\" href=\"#/home\">\n" +
    "                                <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/></a></div>\n" +
    "                        </div>  </div>\n" +
    "                </article>\n" +
    "\n" +
    "            </div>\n" +
    "            <hr class=\"split_top\">\n" +
    "\n" +
    "            <div class=\"row-fluid\">\n" +
    "                <article class=\"span3 radio split_invisible_helper\">\n" +
    "                    <p>{{parsedUrlList[4].name}}</p>\n" +
    "                    <div class=\"row-fluid\">\n" +
    "                        <div>\n" +
    "                            <div class=\"span8 split_vertical\">\n" +
    "                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[4].name}} type=\"button\">Голосовать</button>\n" +
    "                            </div>\n" +
    "                            <div class=\"span4\">\n" +
    "                                <a class=\"play_this\" name={{parsedUrlList[4].name}} stream={{parsedUrlList[4].url}} href=\"#/\">\n" +
    "                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </article>\n" +
    "                <article class=\"span3 radio split_invisible_helper\">\n" +
    "                    <p>{{parsedUrlList[5].name}}</p>\n" +
    "                    <div class=\"row-fluid\">\n" +
    "                        <div>\n" +
    "                            <div class=\"span8 split_vertical\">\n" +
    "                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[5].name}} type=\"button\">Голосовать</button>\n" +
    "                            </div>\n" +
    "                            <div class=\"span4\">\n" +
    "                                <a class=\"play_this\" name={{parsedUrlList[5].name}} stream={{parsedUrlList[5].url}} href=\"#/\">\n" +
    "                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </article>\n" +
    "                <article class=\"span3 radio split_invisible_helper\">\n" +
    "                    <p>{{parsedUrlList[6].name}}</p>\n" +
    "                    <div class=\"row-fluid\">\n" +
    "                        <div>\n" +
    "                            <div class=\"span8 split_vertical\">\n" +
    "                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[6].name}} type=\"button\">Голосовать</button>\n" +
    "                            </div>\n" +
    "                            <div class=\"span4\">\n" +
    "                                <a class=\"play_this\" name={{parsedUrlList[6].name}} stream={{parsedUrlList[6].url}} href=\"#/\">\n" +
    "                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </article>\n" +
    "                <article class=\"span3 radio split_invisible_helper\">\n" +
    "                    <p>{{parsedUrlList[7].name}}</p>\n" +
    "                    <div class=\"row-fluid\">\n" +
    "                        <div>\n" +
    "                            <div class=\"span8 split_vertical\">\n" +
    "                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[7].name}} type=\"button\">Голосовать</button>\n" +
    "                            </div>\n" +
    "                            <div class=\"span4\">\n" +
    "                                <a class=\"play_this\" name={{parsedUrlList[7].name}} stream={{parsedUrlList[7].url}} href=\"#/\">\n" +
    "                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </article>\n" +
    "\n" +
    "\n" +
    "                    <div class=\"row-fluid\">\n" +
    "                        <div class=\"span6\">\n" +
    "                            <div class=\"row-fluid\">\n" +
    "                                <article class=\"span6 radio \">\n" +
    "                                    <p>{{parsedUrlList[8].name}}</p>\n" +
    "                                    <div class=\"row-fluid\">\n" +
    "                                        <div>\n" +
    "                                            <div class=\"span8 split_vertical\">\n" +
    "                                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[8].name}} type=\"button\">Голосовать</button>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"span4\">\n" +
    "                                                <a class=\"play_this\" name={{parsedUrlList[8].name}} stream={{parsedUrlList[8].url}} href=\"#/\">\n" +
    "                                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                                </a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </article>\n" +
    "                                <article class=\"span6 radio\">\n" +
    "                                    <p>{{parsedUrlList[9].name}}</p>\n" +
    "                                    <div class=\"row-fluid\">\n" +
    "                                        <div>\n" +
    "                                            <div class=\"span8 split_vertical\">\n" +
    "                                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[9].name}} type=\"button\">Голосовать</button>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"span4\">\n" +
    "                                                <a class=\"play_this\" name={{parsedUrlList[9].name}} stream={{parsedUrlList[9].url}} href=\"#/\">\n" +
    "                                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                                </a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </article>\n" +
    "                            </div>\n" +
    "                            <span>&nbsp</span>\n" +
    "                            <div class=\"row-fluid\">\n" +
    "                                <article class=\"span6 radio\">\n" +
    "                                    <p>{{parsedUrlList[10].name}}</p>\n" +
    "                                    <div class=\"row-fluid\">\n" +
    "                                        <div>\n" +
    "                                            <div class=\"span8 split_vertical\">\n" +
    "                                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[10].name}} type=\"button\">Голосовать</button>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"span4\">\n" +
    "                                                <a class=\"play_this\" name={{parsedUrlList[10].name}} stream={{parsedUrlList[10].url}} href=\"#/\">\n" +
    "                                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                                </a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </article>\n" +
    "                                <article class=\"span6 radio\">\n" +
    "                                    <p>{{parsedUrlList[11].name}}</p>\n" +
    "                                    <div class=\"row-fluid\">\n" +
    "                                        <div>\n" +
    "                                            <div class=\"span8 split_vertical\">\n" +
    "                                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[11].name}} type=\"button\">Голосовать</button>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"span4\">\n" +
    "                                                <a class=\"play_this\" name={{parsedUrlList[11].name}} stream={{parsedUrlList[11].url}} href=\"#/\">\n" +
    "                                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                                </a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </article>\n" +
    "                            </div>\n" +
    "                            <span>&nbsp</span>\n" +
    "                            <div class=\"row-fluid\">\n" +
    "                                <article class=\"span6 radio\">\n" +
    "                                    <p>{{parsedUrlList[12].name}}</p>\n" +
    "                                    <div class=\"row-fluid\">\n" +
    "                                        <div>\n" +
    "                                            <div class=\"span8 split_vertical\">\n" +
    "                                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[12].name}} type=\"button\">Голосовать</button>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"span4\">\n" +
    "                                                <a class=\"play_this\" name={{parsedUrlList[12].name}} stream={{parsedUrlList[12].url}} href=\"#/\">\n" +
    "                                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                                </a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </article>\n" +
    "                                <article class=\"span6 radio\">\n" +
    "                                    <p>{{parsedUrlList[13].name}}</p>\n" +
    "                                    <div class=\"row-fluid\">\n" +
    "                                        <div>\n" +
    "                                            <div class=\"span8 split_vertical\">\n" +
    "                                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[13].name}} type=\"button\">Голосовать</button>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"span4\">\n" +
    "                                                <a class=\"play_this\" name={{parsedUrlList[13].name}} stream={{parsedUrlList[13].url}} href=\"#/\">\n" +
    "                                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                                </a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </article>\n" +
    "                            </div>\n" +
    "                            <span>&nbsp</span>\n" +
    "                            <div class=\"row-fluid\">\n" +
    "                                <article class=\"span6 radio\">\n" +
    "                                    <p>{{parsedUrlList[14].name}}</p>\n" +
    "                                    <div class=\"row-fluid\">\n" +
    "                                        <div>\n" +
    "                                            <div class=\"span8 split_vertical\">\n" +
    "                                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[14].name}} type=\"button\">Голосовать</button>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"span4\">\n" +
    "                                                <a class=\"play_this\" name={{parsedUrlList[14].name}} stream={{parsedUrlList[14].url}} href=\"#/\">\n" +
    "                                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                                </a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </article>\n" +
    "                                <article class=\"span6 radio\">\n" +
    "                                    <p>{{parsedUrlList[15].name}}</p>\n" +
    "                                    <div class=\"row-fluid\">\n" +
    "                                        <div>\n" +
    "                                            <div class=\"span8 split_vertical\">\n" +
    "                                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[15].name}} type=\"button\">Голосовать</button>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"span4\">\n" +
    "                                                <a class=\"play_this\" name={{parsedUrlList[15].name}} stream={{parsedUrlList[15].url}} href=\"#/\">\n" +
    "                                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                                </a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </article>\n" +
    "                            </div>\n" +
    "                            <span>&nbsp</span>\n" +
    "                            <div class=\"row-fluid\">\n" +
    "                                <article class=\"span6 radio\">\n" +
    "                                    <p>{{parsedUrlList[16].name}}</p>\n" +
    "                                    <div class=\"row-fluid\">\n" +
    "                                        <div>\n" +
    "                                            <div class=\"span8 split_vertical\">\n" +
    "                                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[16].name}} type=\"button\">Голосовать</button>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"span4\">\n" +
    "                                                <a class=\"play_this\" name={{parsedUrlList[16].name}} stream={{parsedUrlList[16].url}} href=\"#/\">\n" +
    "                                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                                </a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </article>\n" +
    "                                <article class=\"span6 radio\">\n" +
    "                                    <p>{{parsedUrlList[17].name}}</p>\n" +
    "                                    <div class=\"row-fluid\">\n" +
    "                                        <div>\n" +
    "                                            <div class=\"span8 split_vertical\">\n" +
    "                                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[17].name}} type=\"button\">Голосовать</button>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"span4\">\n" +
    "                                                <a class=\"play_this\" name={{parsedUrlList[17].name}} stream={{parsedUrlList[17].url}} href=\"#/\">\n" +
    "                                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                                </a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </article>\n" +
    "                            </div>\n" +
    "                            <span>&nbsp</span>\n" +
    "                            <div class=\"row-fluid\">\n" +
    "                                <article class=\"span6 radio\">\n" +
    "                                    <p>{{parsedUrlList[18].name}}</p>\n" +
    "                                    <div class=\"row-fluid\">\n" +
    "                                        <div>\n" +
    "                                            <div class=\"span8 split_vertical\">\n" +
    "                                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[18].name}} type=\"button\">Голосовать</button>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"span4\">\n" +
    "                                                <a class=\"play_this\" name={{parsedUrlList[18].name}} stream={{parsedUrlList[18].url}} href=\"#/\">\n" +
    "                                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                                </a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </article>\n" +
    "                                <article class=\"span6 radio\">\n" +
    "                                    <p>{{parsedUrlList[19].name}}</p>\n" +
    "                                    <div class=\"row-fluid\">\n" +
    "                                        <div>\n" +
    "                                            <div class=\"span8 split_vertical\">\n" +
    "                                                <button class=\"btn btn-large test_vote\" name={{parsedUrlList[19].name}} type=\"button\">Голосовать</button>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"span4\">\n" +
    "                                                <a class=\"play_this\" name={{parsedUrlList[19].name}} stream={{parsedUrlList[19].url}} href=\"#/\">\n" +
    "                                                    <img onmouseover=\"this.src='assets/Buttons/Play_Button.png'\" onmouseout=\"this.src='assets/Buttons/Play_Button_off.png'\" src=\"assets/Buttons/Play_Button_off.png\"/>\n" +
    "                                                </a>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </article>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"span6\">\n" +
    "                            <img src=\"assets/advertising.png\"/>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <hr class=\"split_top\">\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "");
}]);
