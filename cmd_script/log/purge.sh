SOURCE_DIR="./logs2/"
DEST_DIR="D:/工作/cmd_script/log_archive"
DURATION=$((86400*3))

while true; do
    mv "$SOURCE_DIR"/* "$DEST_DIR"/ 2>/dev/null
    sleep $DURATION
done