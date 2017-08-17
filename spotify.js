// Access Token: BQCvorKqxlVAojvfv9WTWWPJFfF7NK90G1g9uO4ax_521Jnx1lXHXzhbTklXdmqmsTKMs5qdSbrQ

function login() {
        var CLIENT_ID = 'c367c6a0e22b423d81552445dd48bf48';
        var REDIRECT_URI = 'http://localhost:8000/okay.html';
        function getLoginURL(scopes) {
            return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
              '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
              '&scope=' + encodeURIComponent(scopes.join(' ')) +
              '&response_type=token';
        }
        
        var url = getLoginURL([
            'playlist-modify-public'
        ]);
        
        var width = 450,
            height = 730,
            left = (screen.width / 2) - (width / 2),
            top = (screen.height / 2) - (height / 2);
    
        window.addEventListener("message", function(event) {
            var hash = JSON.parse(event.data);
            if (hash.type == 'access_token') {
                callback(hash.access_token);
            }
        }, false);
        
        var w = window.location(url,
                            'Spotify',
                            'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
                           );
        
    }
$(document).ready(function() {
    //  var followButton = document.getElementById('btn-follow')
    
    // followButton.addEventListener('click', window.location.href='/userinfo.html')
})

// app.get('/login', function(req, res) {
// var CLIENT_ID = 'c367c6a0e22b423d81552445dd48bf48';
// var REDIRECT_URI = 'http://localhost:8000/okay.html';
// var scopes = 'user-read-private user-read-email';
// res.redirect('https://accounts.spotify.com/authorize' + 
//   '?response_type=code' +
//   '&client_id=' + CLIENT_ID +
//   (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//   '&redirect_uri=' + encodeURIComponent(REDIRECT_URI));
// });