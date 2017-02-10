#!/bin/bash
for filename in ./*.md; do
    for ((i=0; i<=3; i++)); do
        m2j $filename -o $filename.json
    done
done
