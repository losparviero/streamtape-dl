# Streamtape Downloader

Download Streamtape videos through the CLI.

<br>

### Usage

Without installing:

```shell
npx streamtape-dl

```

With install:

```
streamtape-dl
```
<details>

<summary>
Make sure env vars are set in your working directory.
</summary>

<br>

On Mac / Linux

```shell
mkdir Streamtape && cd Streamtape && touch .env && { echo "API_USER="; echo "API_PASS="; } >> .env && nano .env
```

On Windows

```shell
mkdir Streamtape && cd Streamtape && type nul > .env && echo APIUSER= >> .env && echo APIPASS= >> .env && notepad .env
```

</details>

<br>

### Install

1. Run ```npm i -g streamtape-dl```.
2. Make a .env file and provide API credentials.
3. Stream in browser or download with your favorite download manager.

#### Get user & pass from [Streamtape](https://streamtape.com/accpanel).

<br>

### Uninstall

1. Use ```rm -rf```.

*Note:* If you're unfamiliar with this command, delete project folder from file explorer.

<br>

### Mechanism

The script uses the [streamtape](https://www.npmjs.com/package/streamtape) lib to generate direct download link.

<br>


    Copyright (C) 2023  Zubin

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

