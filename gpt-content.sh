#!/bin/bash
# Данный скрипт предназначен для рекурсивного обхода указанного каталога
# и вывода его содержимого в виде древовидной структуры.
# Результат работы будет записан в файл ${OUTPUT_FILE} в текущем каталоге.

# Примеры вызова:
#./gpt-content.sh /path/to/directory: сгенерирует древовидную структуру для каталога /path/to/directory.
#./gpt-content.sh directory1 directory2: сгенерирует древовидную структуру для каталогов directory1 и directory2.

# Параметры скрипта (todo: NOT IMPLEMENTED)
# -s - если данный параметр указан, то скрипт будет перед скандированиям заданной директории выводить ее структуру в OUTPUT_FILE
# -e ext1 ext2 ... extN - список расширений файлов, которые необходимо добавить в OUTPUT_FILE. По умолчанию: html,ts,js,hbs,json,yml
# -i ./src/main.ts ./node_modules - список игнорируемых файлов и каталогов. По умолчанию: node_modules
# -o ./output.txt - имя файла, в который будет записан результат работы скрипта. По умолчанию: gpt-content-output.txt


# Имя конечного файла
OUTPUT_FILE="gpt-content-output.txt"

# Массив допустимых расширений файлов
declare -a EXTENSIONS=("html" "ts" "js" "hbs" "json" "yml")

# Массив игнорируемых каталогов
declare -a IGNORED_DIRS=("node_modules")


# Функция для проверки, игнорируется ли файл Git
git_ignored() {
  git check-ignore -q "$1"
}

# Функция для вывода структуры директории
listContent() {
    local dir=${1:-.}
    local prefix=${2:-}

    # Если имя начинается с точки или игнорируется Git, игнорируем его
    if git_ignored "$dir"; then
        return
    fi

    # Печатаем имя директории
    echo "${prefix}${dir##*/}"

    # Если директория недоступна для чтения, печатаем сообщение и возвращаемся
    if [[ ! -r ${dir} ]]; then
        echo "${prefix}   ├── (unreadable)"
        return
    fi

    # Если директория пуста, печатаем сообщение и возвращаемся
    if [[ -z $(ls -A ${dir}) ]]; then
        echo "${prefix}   └── (empty)"
        return
    fi

    # Если директория не пуста, обрабатываем ее содержимое
    local items=$(ls -A ${dir})
    local count=$(echo ${items} | wc -w)

    for item in ${items}; do
        count=$((count - 1))
        if [[ -d ${dir}/${item} ]]; then
            if [[ ${count} -eq 0 ]]; then
                listContent "${dir}/${item}" "${prefix}│   "
            else
                listContent "${dir}/${item}" "${prefix}│   "
            fi
        else
            # Если это файл, печатаем его имя
            if [[ -f ${dir}/${item} && ! $(git_ignored "${dir}/${item}") ]]; then
                echo "${prefix}│   ├── ${item}"
            fi
        fi
    done
}


if [ -f "$OUTPUT_FILE" ]; then
  echo "Removing existing file $OUTPUT_FILE"
  rm "$OUTPUT_FILE"
fi

dir=${1:-.}
echo "${dir##*/}"
listContent $dir " "

# Обработка каждого каталога
for dir in "$@"; do
  echo "Обработка каталога $dir"
  if [ -d "$dir" ]; then
    listContent "$dir" >>"$OUTPUT_FILE"
    for ext in "${EXTENSIONS[@]}"; do
      echo "Поиск файлов с расширением .$ext"
      for file in $(find "$dir" -type f -name "*.$ext"); do
        if ! git_ignored "$file"; then
          echo "Добавление файла $file в $OUTPUT_FILE"
          echo ">>> $file" >>"$OUTPUT_FILE"
          cat "$file" >>"$OUTPUT_FILE"
          echo "<<< $file" >>"$OUTPUT_FILE"
        else
          echo "Файл $file игнорируется Git и не будет добавлен"
        fi
      done
    done
  else
    echo "$dir не является каталогом"
  fi
done
