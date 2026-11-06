# RuView Mobil — APK ve canlı veri (kısa rehber)

## APK üretmek (bilgisayarda hiçbir şey kurmadan)
1. Bu klasörü içeren repoyu kendi GitHub hesabına fork'la / yükle.
2. GitHub → **Actions** → **Build Android APK (RuView mobile)** → **Run workflow**.
3. Bitince çalıştırmanın altındaki **ruview-release-apk** artifact'ını indir, zip'ten çıkan `.apk`'yı telefona kur (Bilinmeyen kaynaklara izin ver).

Alternatif (Expo hesabı gerekir): `cd ui/mobile && npm i --legacy-peer-deps && npx eas-cli build -p android --profile preview`

## Canlı veri
Uygulama sunucuya bağlanamazsa **SIMULATED DATA** gösterir. Canlı olması için:
1. PC'de sensing-server'ı ağa açık başlat (PC'nin LAN IP'si 192.168.1.20 olsun):
   `sensing-server --bind-addr 0.0.0.0 --allowed-host 192.168.1.20`
   (`--allowed-host` olmadan sunucu LAN IP'sinden gelen istekleri 421 ile reddeder.)
2. Telefon ve PC aynı Wi‑Fi'de olsun, PC güvenlik duvarında 8080 (HTTP) ve 8765 (WS) portlarına izin ver.
3. Uygulama → **Settings → Server URL**: `http://192.168.1.20:8080` → Test Connection → Save.
4. Üstteki bant **LIVE STREAM** olmalı. Gerçek veri için ESP32 CSI düğümü gerekir (veya `--source wifi`: sadece kaba RSSI). Donanım yoksa `--source simulated` sunucu tarafında sahte veri üretir; bu "canlı" değildir.
