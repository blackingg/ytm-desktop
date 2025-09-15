from ytmusicapi import YTMusic
import json


yt = YTMusic("backend/oauth.json")
liked = yt.get_liked_songs(limit=100)
playlists = yt.get_library_playlists()

with open("library.json", "w", encoding="utf-8") as f:
    json.dump({"liked": liked, "playlists": playlists}, f, indent=2)
