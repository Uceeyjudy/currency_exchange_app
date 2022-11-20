FROM python:3.9

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . .

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

EXPOSE 8000
