# hpctv

A VueJs application to build a static website displaying various data about HPC usage. The test and production sites are deployed to AWS S3 buckets in the sweg-applications account and fronted by Cloudfront. 

## Requirements

* Node and/or Docker
* AWS cli

## Project setup

The first thing you might want to do is pull down the latest HPC data from SAM. To do this locally you must set the SAM API username and password in the `./get-sam-data.sh` script, then run:

```bash
bash ./get-sam-data.sh
```

This will populate the ./data directory with five JSON files containing HPC data from the SAM API.

## Building the App

### With Docker

Currently, the dockerfile/image/container included herein is just a very basic environment so developers don't have to install node/npm on their local machine.
```shell
# on your local machine...
$ docker build -t hpctv .
$ docker run -it --rm --name hpctv -v "$PWD":/home/node/app hpctv
```

You should now be dropped into a shell on the container at `/home/node/app` and can install and build the app:
```shell
# on the container...
$ npm install
$ npm run build # Compiles and minifies for production
```

Since the current directory is mounted to the container, there should now be a "dist/" directory on your local machine, and on the container, with the built application. This can be pushed to AWS S3.
```shell
# on your local machine...
$ ls -1 ./dist
android-chrome-192x192.png
android-chrome-256x256.png
apple-touch-icon.png
browserconfig.xml
css
data
favicon-16x16.png
favicon-32x32.png
favicon.ico
img
index.html
js
manifest.json
media
mstile-150x150.png
safari-pinned-tab.svg
```

### Without Docker
Assuming you have node/npm installed locally on your dev machine:
```
npm install
npm run build
```
Same as above. There should now be a "dist/" directory with the built application. This can be pushed to AWS S3.

## Commands For Development

### Compiles, serves, and hot-reloads
```
npm run serve
```

### Lint and fix files
```
npm run lint
```

## Deploy to staging and production environments

Deploy manually until the build pipelines are re-created.

* Make sure you have pulled the latest data from SAM (see above)
* Commit your latest code
* Push the ./dist directory to the S3 bucket at hpctv-test.ucar.edu

```shell
cd ./dist
# sync the test site
aws s3 sync . s3://hpctv-test.ucar.edu --delete --profile sweg-webhosting-admin
# sync the live site
aws s3 sync . s3://hpctv.ucar.edu --delete --profile sweg-webhosting-admin
```
~~Deployment to AWS S3 occurs via the "hpctv-deployment" AWS Codepipeline. The pipleline contains two build stages separated by a manual approval. To trigger the pipeline, commit changes to this repo and push to the master branch on GitHub. This will trigger the first build stage.~~

~~The first build stage of the pipeline will:~~

* install npm
* build the application
* add the latest git hash as a comment to the bottom of index.html
* push the code up to the S3 bucket at hpctv-test.ucar.edu

~~At this point, you can access the [staging site](https://hpctv-test.ucar.edu) before promoting to production.~~

~~To promote the build to production, manually approve the pipeline to copy the code from the staging S3 bucket into the production S3 bucket. This production build will also invalidate the Cloudfront cache.~~

## HPC Data

A CircleCI job runs nightly to fetch updated Cheyenne accounting data from SAM. Updated data is synced to the staging and production S3 buckets. Uses AWS credentials from the hpctv-codebuild IAM user.
