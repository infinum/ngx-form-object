import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';

// Simple datastore which saves models to localStorage

export class SimpleModel {
  id: string;

  constructor(data = {}) {
    Object.keys(data).forEach((propertyName: string) => {
      this[propertyName] = data[propertyName];
    });
  }
}

@Injectable()
export class DatastoreService {
  public save<T extends SimpleModel>(model: T): Observable<T> {
    const modelInstanceName: string = this.getModelInstanceName(model);
    const savedModels: Array<T> = this.getModelsByType(modelInstanceName) as Array<T>;

    if (model.id) {
      // Updating a model
      const savedModel: T = savedModels.find((item: T) => item.id === model.id);
      const savedModelIndex: number = savedModels.indexOf(savedModel);
      debugger
      savedModels[savedModelIndex] = model;
    } else {
      // Creating a new model
      model.id = this.generateModelId;
      savedModels.push(model);
    }

    this.setModelsByType(modelInstanceName, savedModels);

    return new BehaviorSubject(model);
  }

  public find<T extends SimpleModel>(modelClass: any, modelId: string): T {
    const models: Array<T> = this.findAll(modelClass) as Array<T>;
    const modelData: object = models.find((item: T) => item.id === modelId);
    return new modelClass(modelData);
  }

  public findAll<T extends SimpleModel>(modelClass: any): Array<T> {
    const modelInstanceName: string = modelClass.name;
    const models: Array<T> = this.getModelsByType(modelInstanceName) as Array<T>;
    return models.map((modelData: object) => new modelClass(modelData));
  }

  private getModelsByType(modelInstanceName: string): Array<SimpleModel> {
    return localStorage.getItem(modelInstanceName) ? JSON.parse(localStorage.getItem(modelInstanceName)) : [];
  }

  private setModelsByType<T>(modelInstanceName: string, models: Array<T>): void {
    localStorage.setItem(modelInstanceName, JSON.stringify(models));
  }

  private getModelInstanceName<T>(model: T) {
    return model.constructor.name;
  }

  private get generateModelId(): string {
    return String(Math.round(Math.random() * 100000));
  }
}
