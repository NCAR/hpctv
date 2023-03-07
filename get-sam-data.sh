#!/usr/bin/env bash
#requires bash >= v4

#these should be set in circleci HPCTV context, or uncomment to run locally
#HPCTV_SAM_API_USER=
#HPCTV_SAM_API_PASSWORD=

API_PREFIX="/api/protected/admin/v1/report"

declare -A ENDPOINTS
ENDPOINTS[report_activity_days_ago_60]="${API_PREFIX}/activity/machine/cheyenne?daysAgo=60"
ENDPOINTS[report_log_days_ago_1]="${API_PREFIX}/log/machine/cheyenne?daysAgo=1"
ENDPOINTS[report_projectlog_days_ago_1]="${API_PREFIX}/projectlog/machine/cheyenne?daysAgo=1"
ENDPOINTS[report_projectlog_days_ago_30]="${API_PREFIX}/projectlog/machine/cheyenne?daysAgo=30"
ENDPOINTS[report_total]="${API_PREFIX}/total/machine/cheyenne"

for key in "${!ENDPOINTS[@]}"
do
    echo "fetching ${ENDPOINTS[$key]}"
    curl --retry 1 --retry-delay 5 --retry-max-time 10 --user ${HPCTV_SAM_API_USER}:${HPCTV_SAM_API_PASSWORD} https://sam.ucar.edu${ENDPOINTS[$key]} -o ./public/data/${key}.json
    [[ ! -s ./public/data/${key}.json ]] && echo "./public/data/${key}.json is empty" && exit 1;
    sleep 1
done