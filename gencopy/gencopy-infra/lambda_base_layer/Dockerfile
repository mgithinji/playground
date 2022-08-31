FROM amazonlinux:2

# install Python
RUN yum install -y python37 && \
    yum install -y python3-pip && \
    yum install -y zip && \
    yum clean all

# set up pip and venv
RUN python3.7 -m pip install --upgrade pip && \
    python3.7 -m pip install virtualenv
RUN python3.7 -m venv base
RUN source base/bin/activate

# install dependecies
COPY ./requirements.txt .
RUN pip install -r requirements.txt -t ./python

# zip it up for deployment
RUN zip -r layer.zip ./python/
ENTRYPOINT [ "/bin/bash", "-1" ]