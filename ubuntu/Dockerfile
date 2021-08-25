FROM ubuntu
WORKDIR /usr/app
RUN apt-get update && apt-get install -y \ 
  python
COPY . . 
CMD python app.py