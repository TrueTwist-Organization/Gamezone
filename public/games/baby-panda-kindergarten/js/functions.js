
   function createLinksInGame(NameID, Screen, Button, GameId) {
    GameId = typeof GameId !== 'undefined' ? GameId : '';
    var domain = document.referrer;
    var url = 'https://www.yiv.com/games.php?cat=recommended&type=new';

    if (typeof GameId === 'undefined' || GameId == '' || GameId == 'undefined') {
      // You can add any necessary code if GameId is not provided
    } else {
      url = url + '&pic=' + GameId;
    }

    if (typeof domain === 'undefined' || domain == '' || domain == 'undefined') {
      domain = 'unknown';
    } else {
      domain = domain.split('/')[2];
    }

    if (url.indexOf('?') > -1) {
      url = url + '&';
    } else {
      url = url + '?';
    }

    url = url + 'utm_source=' + domain + '&utm_medium=' + Screen + '-' + Button + '&utm_campaign=game-' + NameID;
    window.open(url);
  }

