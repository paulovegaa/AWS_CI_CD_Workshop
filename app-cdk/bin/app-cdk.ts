#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AppCdkStack } from '../lib/app-cdk-stack';
import { MyPipelineStack } from '../lib/pipeline-cdk-stack'

const app = new cdk.App();

//const testCdkStack = new AppCdkStack(app, 'test', {});

const pipelineCdkStack = new MyPipelineStack(app, 'MyPipelineStack', {});

//new AppCdkStack(app, 'AppCdkStack', {
  
//});