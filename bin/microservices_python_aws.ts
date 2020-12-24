#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MicroservicesPythonAwsStack } from '../lib/microservices_python_aws-stack';

const app = new cdk.App();
new MicroservicesPythonAwsStack(app, 'MicroservicesPythonAwsStack');
