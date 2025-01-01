log_with_timestamp(){
    local prefix="./logs/log-"
    local suffix="__"
    local counter=0
    local filesize=100  #1048576  # 10mb

    while IFS= read -r line; do
        # local timestamp=$(date '+%Y-%m-%d_%H-%M-%S')
        local timestamp=$(date '+%Y-%m-%d_%H-%M')
        local logfile="${prefix}${timestamp}${suffix}${counter}.log"
        echo "$line" >> "$logfile"
        # if [[ $(stat -c%s "$logfile") -ge 10485760 ]]; then
        counter=0
        if [[ $(stat -c%s "$logfile") -ge $filesize ]]; then
            ((counter++))
        fi 
    done
}

# function 
sh for.sh Logger 2>&1 | log_with_timestamp