function make_album(artist, album_title, num_tracks) {
    var album = {
        album_title: album_title,
        artist: artist
    };
    if (num_tracks) {
        album.num_tracks = num_tracks;
    }
    return album;
}
var album1 = make_album("Album_A", "Artist_A");
var album2 = make_album("Album_B", "Artist_B", 16);
var album3 = make_album("Album_C", "Artist_C", 12);
console.log(album1);
console.log(album2);
console.log(album3);
