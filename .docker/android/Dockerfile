FROM openjdk:8-jdk
USER root

ENV ANDROID_COMPILE_SDK="28" \
    ANDROID_BUILD_TOOLS="28.0.2" \
    ANDROID_SDK_TOOLS="4333796" \
    ANDROID_HOME="/usr/local/lib/android"

RUN apt-get update && \
    apt-get install -y build-essential file apt-utils

RUN curl -o /tmp/sdk-tools-linux.zip https://dl.google.com/android/repository/sdk-tools-linux-${ANDROID_SDK_TOOLS}.zip
RUN unzip /tmp/sdk-tools-linux.zip -d ${ANDROID_HOME}
RUN rm /tmp/sdk-tools-linux.zip
RUN echo y | ${ANDROID_HOME}/tools/bin/sdkmanager "platforms;android-${ANDROID_COMPILE_SDK}"
RUN mkdir "${ANDROID_HOME}/licenses" || true
RUN echo "24333f8a63b6825ea9c5514f83c2829b004d1fee" > "${ANDROID_HOME}/licenses/android-sdk-license"
RUN $ANDROID_HOME/tools/bin/sdkmanager --update
RUN $ANDROID_HOME/tools/bin/sdkmanager "build-tools;${ANDROID_BUILD_TOOLS}" "platforms;android-${ANDROID_COMPILE_SDK}" "platform-tools"

# Install Build Essentials
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g yarn react-native-cli

WORKDIR /var/app

COPY . /var/app
